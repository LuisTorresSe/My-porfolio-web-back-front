const app = require("./app");
const http = require("http");
const logger = require("./utils/logger");
const config = require("./utils/config");

// initial server
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`server running on port ${config.PORT}`);
});
