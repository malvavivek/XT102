const { Duplex } = require('stream');



const inoutstream = new Duplex({
  write(chunk,encoding){
    console.log(chunck.toString());
    
  },
  read(size) {
 
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
    
  }
});
inoutstream.currentCharCode = 65;
process.stdin.pipe(inoutstream).pipe(process.stdout);
