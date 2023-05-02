#!/bin/bash

# Set variables
url="https://apim-dev-global.azure-api.net/global/project/cicd-prototype/api/public/projects/$1/deployments/$2/package"
token="$3"
file="$4"

function call_api {
  echo "$url"
  response=$(curl -s -X POST $url \
    -H "Ocp-Apim-Subscription-Key: $token" \
    -H "Content-Type: multipart/form-data" \
    --form "file=@$file")

  echo "$response"

  # TODO: error handling not 202 response here
#  http_code=$(echo "$response" | awk '/HTTP/{print $2}')
#  if [[ $http_code != "202" ]]; then
#    echo "Unexpected HTTP response code: $http_code"
#    exit 1
#  fi
}

call_api
echo "$response"