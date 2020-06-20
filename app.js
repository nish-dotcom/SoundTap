let express = require('express'),
 app = express(),
 path = require('path');
app.use(express.static('public'));
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname+"/SoundTap.html"));
});


// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("The Server Has Started!");
//  });

app.listen(3000, function(req,res){
	console.log("The Server has Started!")	   
});
	