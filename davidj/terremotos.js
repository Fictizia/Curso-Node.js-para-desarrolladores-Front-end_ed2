var http = require("http");

var url = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson';
http.get(url, 
function(res){
    console.log("statuscode " + res.statusCode);
    if(res.statusCode === 200){
        // console.log(res);
        var total_data = "";
        res.on('data', function(chunk){
              
           total_data += chunk;
        });
        
        res.on("end", function(){
            var json = JSON.parse(total_data);
           //console.log(json);
           
           for (var x in json.features) {
               console.log(json.features[x].id);
           }
           
        });
        
       
    }
}).on('error', function(err){
    console.log("error " + err);
});