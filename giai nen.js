const zlib = require('zlib');
const fs = require('fs');

const zip = zlib.createUnzip();
const r = fs.createReadStream('docghi.txt.gz');
const w = fs.createWriteStream('giainen.txt');
r.pipe(gzip).pipe(w);

console.log("ok roi");