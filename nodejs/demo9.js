const { Transform } = require('stream');
const inoutstream = new Transform({
    transform(chunk,encoding,cb){
    this.push(chunk.toString().toUpperCase());
    cb();
  },
});

inoutstream.currentCharCode = 65;
process.stdin.pipe(inoutstream).pipe(process.stdout);
