FROM node:14-stretch

# OSの環境整備
RUN apt-get update && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# npmの環境整備
RUN npm update -g npm \
 && npm install yarn && echo export PATH=\$PATH:`yarn global bin` >> ~/.bashrc \
 && export PATH=\$PATH:`yarn global bin` \
 & yarn global add typescript expo-cli \
 && npm install -g @aws-amplify/cli

WORKDIR /workspace
