var http = require('http'),
      url = require('url');

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    console.log('Path name ', pathname);
    
    if (pathname === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end('<html><boddy><p><p></body></html>');

    } else if (pathname === '/contact') {
        res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end('<html><boddy><p>Pagina de contacto<p></body></html>');

    } else if (pathname === '/situacion') {
        res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end("<html><boddy><h1>Dónde estamos</h1><script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:440px;width:700px;'><div id='gmap_canvas' style='height:440px;width:700px;'></div><div><small><a href='http://embedgooglemaps.com'>									embed google map							</a></small></div><div><small><a href='http://botonmegusta.org'>me gusta facebook</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:10,center:new google.maps.LatLng(40.4167754,-3.7037901999999576),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(40.4167754,-3.7037901999999576)});infowindow = new google.maps.InfoWindow({content:'<strong>Mapa situacion</strong><br>Madrid, Spain<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script></body></html>");   

    } else {
        res.writeHead(301, {
        'Location': '/'
      });
      res.end(); 
    }

  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');