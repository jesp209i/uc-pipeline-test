param(
    [Parameter(Position=0)]    
    [string] 
    $BaseUrl,

    [Parameter(Position=1)]    
    [string] 
    $ProjectId,

    [Parameter(Position=2)]
    [string] 
    $ApiKey,
    
    [Parameter(Position=3)]
    [string]
    $DownloadFolder,

    [Parameter(Position=4)]
    [string] 
    $PipelineVendor
)

$deploymentUrl = "$BaseUrl/v1/projects/$ProjectId/deployments"

$headers = @{
  'Umbraco-Cloud-Api-Key' = $ApiKey
  'Content-Type' = 'application/json'
}

# Get latest deployment id
function Get-Latest-DeploymentId {

  # Only fetching the latest one
  $latestDeploymentUrl = "$($deploymentUrl)?skip=0&take=1"
  try {
    $response = Invoke-WebRequest -URI $LatestDeploymentUrl -Headers $headers 
    if ($response.StatusCode -eq 200) {
        $jsonResponse = ConvertFrom-Json $([String]::new($response.Content))

        return $jsonResponse.deployments[0].deploymentId
    }

    Write-Host "---Response Start---"
    Write-Host $response
    Write-Host "---Response End---"
    Write-Host "Unexpected response - see above"
    exit 1

  } catch {
    Write-Host "---Error-Get-Latest-DeploymentId---"
    Write-Host $_
    exit 1
  }
}


# Get diff - stores file as git-patch.diff
function Get-Changes ($DeploymentId) {
  if (!(Test-Path $DownloadFolder -PathType Container)) { # ensure folder exists
      New-Item -ItemType Directory -Force -Path $DownloadFolder
  }
  
  $changeUrl="$($deploymentUrl)/$($DeploymentId)/diff"
  Write-Host $changeUrl

  try {
    $Response = Invoke-WebRequest -URI $changeUrl -Headers $headers
    $statusCode = $response.StatusCode
    Write-Host $statusCode

    if ($statusCode -eq 200) {
      # Extract the responsebody into a file
      $response | Select-Object -ExpandProperty Content | Out-File "$DownloadFolder/git-patch.diff"
    }
    
    return $statusCode

  } catch {
    Write-Host "---Error-Get-Changes---"
    Write-Host $_
    exit 1
  }
}

$LatestDeploymentId = Get-Latest-DeploymentId

try {

  $DiffStatusCode = Get-Changes($LatestDeploymentId)
  Write-Host "diffstatus is $DiffStatusCode"
  if ($DiffStatusCode -eq '204'){
    Write-Host "No Changes"
    switch ($PipelineVendor) {
      "GITHUB" {
        "REMOTE_CHANGES=no" | Out-File -FilePath $env:GITHUB_OUTPUT -Append
      }
      "AZUREDEVOPS" {
        Write-Host "##vso[task.setvariable variable=remoteChanges;isOutput=true]no"      }
      "TESTRUN" {
        Write-Host $PipelineVendor
      }
      Default {
        Write-Host "Please use one of the supported Pipeline Vendors or enhance script to fit your needs"
        Write-Host "Currently supported are: GITHUB and AZUREDEVOPS"
        Exit 1
      }
    }
    return
  }

  if ($DiffStatusCode -eq '200'){
    Write-Host "Changes registered - check file: $DownloadFolder/git-patch.diff"
    switch ($PipelineVendor) {
      "GITHUB" {
        "REMOTE_CHANGES=yes" | Out-File -FilePath $env:GITHUB_OUTPUT -Append
        "REMOTE_CHANGE_FILE=git-patch.diff" | Out-File -FilePath $env:GITHUB_OUTPUT -Append
      }
      "AZUREDEVOPS" {
        Write-Host "##vso[task.setvariable variable=remoteChanges;isOutput=true]yes"
        Write-Host "##vso[task.setvariable variable=lastestDeploymentId;isOutput=true]$latestDeploymentId"
        Write-Host "##vso[task.setvariable variable=remoteChangeFile;isOutput=true]git-patch.diff"
      }
      "TESTRUN" {
        Write-Host $PipelineVendor
      }
      Default {
        Write-Host "Please use one of the supported Pipeline Vendors or enhance script to fit your needs"
        Write-Host "Currently supported are: GITHUB and AZUREDEVOPS"
        Exit 1
      }
    }
    return
  }
}
catch {
  Write-Host "---Error---"
  Write-Host $_
  exit 1
}