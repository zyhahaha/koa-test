const router = require('koa-router')();
const MarkdownIt = require('markdown-it');

// const readline = require('readline');
const fs = require('fs');
async function markdownCtrl(ctx) {
  let result = await readFile('./test.md');
  let md = new MarkdownIt();
  result = md.render(result);
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = result;
}

function readFile(filePath) {
  let result = '';

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      result = data;
      resolve(result);
    });
  });
}

router.get('/markdown', markdownCtrl);

module.exports = router;
