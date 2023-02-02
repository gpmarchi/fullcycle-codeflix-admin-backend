FROM node:14.15.4-slim

RUN usermod -u 1001 node
USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]