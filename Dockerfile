FROM node:7.8.0

ENV NPM_CONFIG_LOGLEVEL warn

# In your Dockerfile.
COPY . .
RUN npm run build


RUN npm install -g serve
# Run serve when the image is run.
CMD serve -s build
# Let Docker know about the port that serve runs on.
EXPOSE 5000
