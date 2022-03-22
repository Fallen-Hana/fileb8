const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();
const r = fs.createReadStream('docghi.txt');
const w = fs.createWriteStream('docghi.txt.gz');
r.pipe(gzip).pipe(w);

console.log("ok roi");