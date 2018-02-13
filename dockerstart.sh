#!/usr/bin/env bash

cat >> ~/.ssh/config  << EOF
  VerifyHostKeyDNS yes
  StrictHostKeyChecking no
  EOF
  
echo "stopping running application"
echo ssh root@howdryami.deploythenscotch.com 'docker stop howdryami'
ssh root@howdryami.deploythenscotch.com 'docker rm howdryami'

echo "pulling latest version of the code"
ssh root@howdryami.deploythenscotch.com 'docker pull terjeofnorway/howdryami:master'
ssh root@howdryami.deploythenscotch.com 'docker stop howdryami_master'
ssh root@howdryami.deploythenscotch.com 'docker rm howdryami_master'

echo "starting the new version"
ssh root@howdryami.deploythenscotch.com 'docker run -d --restart=always --name howdryami_master -p 80:5000 terjeofnorway/howdryami:master'

echo "success!"

exit 0
