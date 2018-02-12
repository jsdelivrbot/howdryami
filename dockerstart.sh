#!/usr/bin/env bash

echo "stopping running application"
echo 'yes' | ssh root@46.101.175.155 'docker stop howdryami'
ssh root@46.101.175.155 'docker rm howdryami'

echo "pulling latest version of the code"
ssh root@46.101.175.155 'docker pull terjeofnorway/howdryami:latest'

echo "starting the new version"
ssh root@46.101.175.155 'docker run -d --restart=always --name dodsv -p 80:5000 terjeofnorway/howdryami:latest'

echo "success!"

exit 0
