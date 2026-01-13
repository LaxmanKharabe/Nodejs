const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'large-file.txt');
const stream = fs.createWriteStream(out);
const chunk = 'x'.repeat(1024);
const totalChunks = 20000;
let written = 0;

function write() {
  let ok = true;
  while (written < totalChunks && ok) {
    ok = stream.write(chunk + '\n');
    written++;
  }
  if (written >= totalChunks) {
    stream.end();
  } else {
    stream.once('drain', write);
  }
}

write();
stream.on('finish', () => console.log('large-file.txt generated'));
stream.on('error', (err) => console.error('write error', err));
