#!/usr/bin/env bash

echo "stopping running application"
echo ssh root@howdryami.deploythenscotch.com 'docker stop howdryami'
ssh root@howdryami.deploythenscotch.com 'docker rm howdryami'

echo "pulling latest version of the code"
ssh root@howdryami.deploythenscotch.com 'docker pull terjeofnorway/howdryami:latest'

echo "starting the new version"
ssh root@howdryami.deploythenscotch.com 'docker run -d --restart=always --name dodsv -p 80:5000 terjeofnorway/howdryami:latest'

echo "success!"

exit 0
