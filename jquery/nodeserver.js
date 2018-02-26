var express = require('express'),
app = express();
app.use(express.static(__dirname));
app.listen(5000, function() {
console.log('listening on *:5000');
}); 


//Drag-> source
//DropOver->Destination
//draEnd->source
//dragStart->source
//dragLeave->destination
//drop->destination
