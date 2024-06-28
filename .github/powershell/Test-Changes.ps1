param(
    [Parameter(Position=0)]    
    [string] 
    $SourceBranchName,
    
    [Parameter(Position=1)]    
    [string] 
    $PatchFilePath,

    [Parameter(Position=2)]
    [string] 
    $PipelineVendor = "GITHUB" ## GITHUB or AZUREDEVOPS
)

Write-Host "Working branch: $SourceBranchName"
Write-Host "================================================="

## TODO: figure out if this is needed
if ($PipelineVendor -eq "AZUREDEVOPS") {
    git checkout $SourceBranchName
}

git apply $PatchFilePath --check
if (-not $?){
    Write-Host "================================================="
    Write-Host "Check indicates that we cannot automatically apply the changes coming from Cloud"
    Write-Host "You will have to handle this conflict manually"
    Write-Host "See errors above"
    exit 1
}

Write-Host "The GIT APPLY PATCH CHECK was successfully completed"

exit 0
