const LOCAL_CONFIG = require('./local.js');
const config = {
  // 启动端口
  port: 8088,
  // 数据库配置
  database: {
    DATABASE: LOCAL_CONFIG.database,
    USERNAME: LOCAL_CONFIG.username,
    PASSWORD: LOCAL_CONFIG.password,
    PORT: LOCAL_CONFIG.port,
    HOST: LOCAL_CONFIG.host
  }
};

module.exports = config;