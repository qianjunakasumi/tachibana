FROM buildpack-deps:bookworm

ENV NODE_VERSION 22.15.1
ENV GOLANG_VERSION 1.24.3

RUN apt update \
    && apt install -y sudo zsh \
    && groupadd --gid 1000 tachibana \
    && useradd --uid 1000 --gid tachibana --shell /bin/zsh --create-home tachibana \
    && echo 'tachibana:tachibana' | chpasswd \
    && usermod -aG sudo tachibana

USER tachibana
SHELL ["/bin/zsh", "-c"]
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" \
    && curl -o- https://fnm.vercel.app/install | bash \
    && source /home/tachibana/.zshrc \
    && fnm install "$NODE_VERSION" \
    && corepack enable yarn \
    # smock test
    && node -v \
    && yarn -v \
    && rm -rf /tmp/*
