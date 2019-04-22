const LOCAL_CONFIG = require('./local.js');
const config = {
  // 启动端口
  port: 8088,
  // 数据库配置
  database: {
    DATABASE: 'test',
    USERNAME: 'root',
    PASSWORD: LOCAL_CONFIG.password,
    PORT: '3306',
    HOST: '47.96.234.53'
  }
};

module.exports = config;