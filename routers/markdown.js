const router = require('koa-router')();

const readline = require('readline');
const fs = require("fs");  
async function markdownCtrl(ctx) {
  const result = await readFile('./index.md');
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.json = {
    result
  };
}
function readFile(filePath) {
  let input = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input
  });
  let result = [];
  let lineData;


  return new Promise((resolve, reject) => {
    rl.on('line', line => {
      lineData = line.split(/\s+/);
      result.push(lineData);
    });

    rl.on('close', line => {
      console.log(result);
      console.log('读取完毕！');

      resolve(result);
    });

    rl.on('error', reject);
  });
}

module.exports = router