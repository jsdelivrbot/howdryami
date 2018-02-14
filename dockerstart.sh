#!/usr/bin/env bash

cat >> ~/.ssh/config  << EOF
VerifyHostKeyDNS yes
StrictHostKeyChecking no
EOF

echo "stopping running application"
echo ssh -i whiskey@howdryami.deploythenscotch.com 'docker stop howdryami'
ssh whiskey@howdryami.deploythenscotch.com 'docker rm howdryami'

echo "pulling latest version of the code"
ssh $1 whiskey@howdryami.deploythenscotch.com 'docker pull terjeofnorway/howdryami:master'
ssh $1 whiskey@howdryami.deploythenscotch.com 'docker stop howdryami_master'
ssh whiskey@howdryami.deploythenscotch.com 'docker rm howdryami_master'

echo "starting the new version"
ssh $1 whiskey@howdryami.deploythenscotch.com 'docker run -d --restart=always --name howdryami_master -p 80:5000 terjeofnorway/howdryami:master'

echo "success!"

exit 0
