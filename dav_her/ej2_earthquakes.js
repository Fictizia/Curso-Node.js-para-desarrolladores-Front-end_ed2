var request = require('request');
var eqParam;
if (process.argv[2]){
    eqParam = process.argv[2];
    console.log('Parametro 1', eqParam);
}

if (eqParam === 'significant' || eqParam === '4.5' || eqParam === '2.5' || eqParam === '1.0' || eqParam === 'all'){
    
    var uri = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/'+eqParam+'_hour.geojson';
    request({
        method : 'GET',
        uri : uri
    }, function(error, response, body){
        if (error){
            console.log('Error', error);
        }
        var jsonResult = JSON.parse(body);
        
        console.log('*****************************');
        console.log(jsonResult.metadata.title);
        console.log('---------------------');
        console.log('total: '+jsonResult.metadata.count);
        console.log('status: '+jsonResult.metadata.status);
        console.log('---------------------');
        console.log(new Date(jsonResult.metadata.generated));
        console.log('==============================');
        
        for (var i=0 ; i<jsonResult.metadata.count; i++){  
            console.log(jsonResult.features[i].properties.place);
            console.log(new Date(jsonResult.features[i].properties.time));
            console.log('Magnitud: '+jsonResult.features[i].properties.mag);
            console.log('Estatus: '+jsonResult.features[i].properties.status);
            console.log('Tipo: '+jsonResult.features[i].properties.type);
            console.log('Lugar: '+jsonResult.features[i].properties.place);
            console.log('Coordenadas: '+jsonResult.features[i].geometry.coordinates[0]+' , '+jsonResult.features[i].geometry.coordinates[1]);
            console.log('Info: '+jsonResult.features[i].properties.url);
            console.log('Detalles: '+jsonResult.features[i].properties.detail);
            console.log('==============================');
        }
    });
    
}