#!/bin/bash

# Set variables
url="https://apim-dev-global.azure-api.net/global/project/cicd-prototype/api/public/projects/$1/deployments"
token="$2"
commitMessage="$3"

# Define function to call API and check status
function call_api {
  echo "$url"
  response=$(curl -s -X POST $url \
    -H "Ocp-Apim-Subscription-Key: $token" \
    -H "Content-Type: application/json" \
    -d "{\"commitMessage\":\"$commitMessage\"}")
  echo "$response"
#  http_code=$(echo "$response" | awk '/HTTP/{print $2}')
#  if [[ $http_code != "201" ]]; then
#    echo "Unexpected HTTP response code: $http_code"
#    exit 1
#  fi
  status=$(echo "$response" | jq -r '.deploymentState')
  deployment_id=$(echo "$response" | jq -r '.deploymentId')
  if [[ $status != "Pending" ]]; then
    echo "Unexpected status: $status"
    exit 1
  fi
  echo "$deployment_id"
}

call_api

echo "Deployment started successfully -> $deployment_id"

echo "DEPLOYMENT_ID=$deployment_id" >> "$GITHUB_OUTPUT"
