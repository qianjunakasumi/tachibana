# https://github.com/devcontainers/images/tree/main/src/base-ubuntu
FROM mcr.microsoft.com/devcontainers/base:ubuntu

ENV FNM_PATH /home/vscode/.local/share/fnm
ENV NODE_VERSION 22.15.1
ENV GOLANG_VERSION 1.24.3

USER vscode
SHELL ["/bin/bash", "-c"]
RUN    curl -fsSL https://fnm.vercel.app/install | bash \
    && export PATH="$FNM_PATH:$PATH" && eval "`fnm env`" \
    && fnm install $NODE_VERSION \
    && corepack enable yarn \
    && sudo rm -rf /tmp/*
