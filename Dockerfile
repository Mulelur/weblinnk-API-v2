# Build Stage
# ---
FROM node:18 AS builder
WORKDIR /opt/app

COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
RUN rm -rf node_modules && npm i --production --ignore-scripts

# Run Stage
# ---
FROM gcr.io/distroless/nodejs:18


COPY --chown=rotonda --from=builder /opt/app /opt/app

WORKDIR /opt/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PATH /opt/node_app/node_modules/.bin:$PATH


CMD ["dist/main.js"]


FROM builder AS dev-envs

RUN <<EOF
apk update
apk add git
EOF

RUN <<EOF
addgroup -S docker
adduser -S --shell /bin/bash --ingroup docker vscode
EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["dist/main.js"]