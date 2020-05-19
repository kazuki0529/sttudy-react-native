FROM node:14-stretch

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
ENV REACT_NATIVE_PACKAGER_HOSTNAME="localhost"

# OSの環境整備
RUN apt-get update && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# npmの環境整備
RUN npm update -g npm \
 && npm install yarn && echo export PATH=\$PATH:`yarn global bin` >> ~/.bashrc \
 && export PATH=\$PATH:`yarn global bin`

RUN yarn global add typescript expo-cli \
 && npm install -g @aws-amplify/cli

WORKDIR /workspace

