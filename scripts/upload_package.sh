#!/bin/bash

# Set variables
projectAlias="$1"
deploymentId="$2"
url="https://apim-dev-global.azure-api.net/projects/$projectAlias/deployments/$deploymentId/package"
apiKey="$3"
file="$4"

function call_api {
  response=$(curl -s -X POST $url \
    -H "Umbraco-Api-Key: $apiKey" \
    -H "Content-Type: multipart/form-data" \
    --form "file=@$file")

  echo "$response"
}

call_api
