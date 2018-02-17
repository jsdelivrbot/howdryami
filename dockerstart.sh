#!/usr/bin/env bash

cat >> ~/.ssh/config  << EOF
VerifyHostKeyDNS yes
StrictHostKeyChecking no
EOF

echo "pulling latest version of the code"
ssh whiskey@howdryami.deploythenscotch.com 'docker pull terjeofnorway/howdryami:master'
ssh whiskey@howdryami.deploythenscotch.com 'docker kill $(docker ps -q)'

echo "starting the new version"
ssh whiskey@howdryami.deploythenscotch.com 'docker run -d --restart=always -p 80:5000 terjeofnorway/howdryami:master'

echo "success!"

exit 0
