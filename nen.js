const zlib = require('zlib');
const fs = require('fs');

const zip = zlib.createGzip();
const r = fs.createReadStream('docghi.txt');
const w = fs.createWriteStream('docghi.txt.gz');
r.pipe(zip).pipe(w);

console.log("ok roi");