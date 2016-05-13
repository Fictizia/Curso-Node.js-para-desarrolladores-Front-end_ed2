# Clase 3

### Promesas
![promises_ecma6](https://mdn.mozillademos.org/files/8633/promises.png)
> A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its *then* method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.
> From [promisesaplus.com](http://promisesaplus.com/)

- Estados:
    - Fulfilled – La acción en relación con la promesa se logró.
    - Rejected – La acción en relación con la promesa falló.
    - Pending – Pendiente, no se ha cumplido o rechazado aún.
    - Settled - Reiterada, se ha cumplido o se ha rechazado.

- En ECMA6:
- [Soporte en navegadores](http://caniuse.com/#search=promise) 	
	- Una promesa
	```javascript
		var cuentaPromesas = 0;
		var errorMode = false;
		function testPromesa() {
		
		  var numPromesaActual = ++cuentaPromesas;
		
		  console.warn("Promesa Asíncrona numero ("+numPromesaActual+") - Iniciada")
		
		  var miPromesa = new Promise(
		    function(resolve, reject) {       
		      
		      console.info("Promesa Asíncrona numero ("+numPromesaActual+") - Proceso asincrónico empezado");
		      
		      if(errorMode){
		          reject(numPromesaActual)
		      } else{
		        window.setTimeout(
		          function() {
		            resolve(numPromesaActual)
		          }, Math.random() * 2000 + 1000);
		      }
		    });
		  miPromesa.then(
		    function(val) {
		      console.info("Promesa Asíncrona numero ("+val+") - Proceso asincrónico terminado");
		      console.warn("Promesa Asíncrona numero ("+numPromesaActual+") - Finalizada");
		    }).catch(
		      function(val){
		        console.error("Promesa Asíncrona numero ("+val+") - ERROR FATAL");
		    });
		};
		
		testPromesa();
	```
	- Usando *.race()*
	```javascript	
		var p1 = new Promise(function(resolve, reject) { 
		    setTimeout(resolve, 500, "uno"); 
		});
		var p2 = new Promise(function(resolve, reject) { 
		    setTimeout(resolve, 100, "dos"); 
		});
		
		Promise.race([p1, p2]).then(function(value) {
		  console.log(value); // "dos" - p2 más rápida
		}); 
	```	
	- Usando *.all()*
	```javascript
		var errorMode = false
	
		var p1 = new Promise(function(resolve, reject) {
		  console.log("P1 - Iniciada"); 
		  setTimeout(resolve, 1000, "P1 - Terminada"); 
		}); 
		var p2 = new Promise(function(resolve, reject) {
		  console.log("P2 - Iniciada");
		  setTimeout(resolve, 2000, "P2 - Terminada"); 
		});
		var p3 = new Promise(function(resolve, reject) {
		  if(errorMode){
		    reject("errorMode-Activado");
		  } else {
		    console.log("P3 - Iniciada");
		    setTimeout(resolve, 3000, "P3 - Terminada");
		  }
		
		});
		var p4 = new Promise(function(resolve, reject) {
		  console.log("P4 - Iniciada");
		  setTimeout(resolve, 4000, "P4 - Terminada");
		});
		
		Promise.all([p1, p2, p3, p4]).then(function(value) { 
		  console.info("Promise.all -> TODO TERMINADO", value)
		}, function(reason) {
		  console.log("Parece... que fallamos!", reason)
		});
	```

- Alternativas para usar promesas:
	- [Q](https://github.com/kriskowal/q)
		- Muy utilizada en Nodejs
		- [Q.js](https://rawgit.com/kriskowal/q/v1/q.js);
		- [Q Docs](https://github.com/kriskowal/q/wiki/API-Reference)
		```javascript
			function primeraFuncion() {
			    var deferred = Q.defer();
			    setTimeout(function() {
			        console.info('Primera funcion');
			        deferred.resolve();
			    }, 2000);
			    return deferred.promise;
			}
			
			function segundaFuncion() {
			    var deferred = Q.defer();
			    setTimeout(function() {
			        console.info('Segunda funcion');
			        deferred.resolve();
			    }, 1000);
			    return deferred.promise;
			}
			Q()
			    .then(primeraFuncion)
			    .then(segundaFuncion)
			    .done();		
		```
 
	- [RSVP.js](https://github.com/tildeio/rsvp.js)
	- [When.js](https://github.com/cujojs/when)

### Namespace

> Un espacio de nombres es un contenedor abstracto en el que un grupo de uno o más identificadores únicos pueden existir. Un identificador definido en un espacio de nombres está asociado con ese espacio de nombres. El mismo identificador puede independientemente ser definido en múltiples espacios de nombres, eso es, el sentido asociado con un identificador definido en un espacio de nombres es independiente del mismo identificador declarado en otro espacio de nombres. Los lenguajes que manejan espacio de nombres especifican las reglas que determinan a qué espacio de nombres pertenece una instancia de un identificador. *[Wikipedia](http://www.wikiwand.com/es/Espacio_de_nombres)*

- **Claves**
    - Reducir el número de objetos globales
    - Todo forma parte de un único objeto
    - Se puede trabajar en diversos archivos .js

- **Namespace (función anónima):**
    ```javascript
        var myApp = (function () {
            // privado
            var metodoPrivado1 = function () {
                console.info("Método Privado 1");
            };
            var metodoPrivado2 = function () {
                console.info("Método Privado 2");           
            };
            var propiedadPrivada1 = 'dato1';
            return {
                // público
                metodoPublico1: metodoPrivado1,
                propiedadesPublicas:{
                    propiedad1: propiedadPrivada1,
                    otro: "otro"
                },
                mas:{
                    MetodoPublico2: metodoPrivado2
                }
                //...
            }
        })();
    ```

- **Namespace (Extensión):**
    ```javascript
        var myApp = myApp || {};

        (function( namespace ){
            namespace.propiedad1 = "Propiedad 1";
            namespace.metodo1 = function(){
                return "metodo1";
            };
        })(myApp);
        console.log(myApp); 
    ```

- **Usando Namespace:**
    ```javascript
        // global
        var myApp = myApp || {};
        
        // sub-objeto
        myApp.ejemploDatos = {}
        
        myApp.ejemploDatos = {
            metodo: function () {
                console.log("esto es un metodo");           
            },
            propiedad1: 1,
            propiedad2: "dos"
        }
    ```

- **Simplificar la creación de elementos:**
    ```javascript
        var myApp = myApp || {};
        
        myApp.crearElemento = function(nombre){
            var partes = nombre.split('.');
            var nameSpace = myApp;
            for (var i in partes) {
                if (!nameSpace[partes[i]]) {
                    nameSpace[partes[i]] = {};
                }
                nameSpace = nameSpace[partes[i]];
            }
        }
        
        myApp.crearElemento('uno.dos.tres.cuatro.cinco.y.mas.niveles');
        myApp.uno.dos.tres.cuatro.cinco.y.mas.niveles = "Funciona!"
    ```

### Terminal UNIX

- [400 comandos que deberias conocer](http://blog.desdelinux.net/mas-de-400-comandos-para-gnulinux-que-deberias-conocer/)
- [Terminal online](http://www.tutorialspoint.com/unix_terminal_online.php)
- [Webminal](http://www.webminal.org/)
- [C9 - Terminal - Documentación](https://docs.c9.io/docs/terminal)
- **Librerías**
	- [shelljs](https://www.npmjs.com/package/shelljs)
	- [node-cmd](https://www.npmjs.com/package/node-cmd)


### Multipart Internet Mail Extensions (MIME)

- **Más usadas:**
	- text/html
	- text/plain
	- text/css
	- image/gif
	- image/x-png
	- image/jpeg
	- application/pdf
	- application/zip
	- text/javascript
	- *[Lista Completa](http://sites.utoronto.ca/webdocs/HTMLdocs/Book/Book-3ed/appb/mimetype.html)*


### Nodejs
![Node_logo](https://nodejs.org/static/images/logos/nodejs.png)

- Versiones:
  - Pares -> Estables
  - Impares -> inestables

- Versiones LTS:

  ![lts_schedule](https://raw.githubusercontent.com/nodejs/LTS/master/schedule.png)
  - [Planes e información](https://github.com/nodejs/LTS)


- Grandes Cambios:
- [De v0.2 a v0.3](https://github.com/nodejs/node/wiki/Migrating-from-v0.2-to-v0.3)
- [De v0.3 a v0.4](https://github.com/nodejs/node/wiki/Migrating-from-v0.2-to-v0.4)
- [De v0.4 a v0.6](https://github.com/nodejs/node/wiki/API-changes-between-v0.4-and-v0.6)
- [De v0.6 a v0.8](https://github.com/nodejs/node/wiki/API-changes-between-v0.6-and-v0.8)
- [De v0.8 a v0.10](https://github.com/nodejs/node/wiki/API-changes-between-v0.8-and-v0.10)
- [De v0.10 a v0.12](https://github.com/nodejs/node/wiki/API-changes-between-v0.10-and-v0.12)
- [De v0.10 a v4](https://github.com/nodejs/node/wiki/API-changes-between-v0.10-and-v4)
- [De v4 to a v5](https://github.com/nodejs/node/wiki/Breaking-changes-between-v4-and-v5)
- [De v5 to a v6](https://github.com/nodejs/node/wiki/Breaking-changes-between-v5-and-v6)
- [io.js](https://github.com/nodejs/node/wiki/Breaking-Changes)


- Comprobar version:
  - Node
```
    node -v
```

  - Npm
```
    npm -v
```


### Hello World

- Hola mundo!:
```javascript
  console.log("Hola Mundo!");
```

- Hola mundo! (retraso):
```javascript
  setTimeout(function() {
    console.log("Hola Futuro...!");
  }, 5000);
```

- Hola mundo! (repetición):
```javascript
  setInterval(function() {
    console.log("Hola Futuro...!");
  }, 1000);
```

### Console

**console.assert(value[, message][, ...])**
```javascript
console.assert(true, 'No me muestro!');
console.assert(false, 'Me muestro');
```

**console.time() y console.timeEnd()**
```javascript
console.time('100-elementos');
for (var i = 0; i < 100; i++) {
  console.log(i);
}
console.timeEnd('100-elementos');
// 100-elementos: 5ms
```

**Sustituciones**

- %d Enteros y coma flotante
```javascript
	console.log("Tenemos %d usuarios conectados", 10);
```
- %s Cadenas
```javascript
	console.log("Tenemos %s usuarios conectados", "muchos");
```
- %j Objetos JSON
```javascript
	console.log("Tenemos %j", {alumnos:{total:15, estado:"conectados"}});
```


### Librerías Nativas (CORE)

**Los estados**
- 0 *Deprecated*
- 1 *Experimental*
- 2 *Unstable*
- 3 *Stable*
- 4 *API Frozen*
- 5 *Locked*

**Los módulos**
- **[Buffer](https://nodejs.org/api/buffer.html)** - *Permite el trabajo con datos crudos*
- [C/C++ Addons](https://nodejs.org/api/addons.html) - *Permite integrar librerias de C/C++*
- **[Child Processes](https://nodejs.org/api/child_process.html)** - *Permite crear y gestionar "procesos hijo"*
- [Cluster](https://nodejs.org/api/cluster.html) - *Permite gestionar nuestro proceso principal e "hijos" entre diversos módulos*
- [Command Line Options](https://nodejs.org/api/cli.html) - *Controla el lanzamiento de Node por Consola*
- [Console](https://nodejs.org/api/console.html) - *Permite trabajar con la consola (terminal), imitando la consola del navegador*
- [Crypto](https://nodejs.org/api/crypto.html) - *Relacionado a las funcionalidades de criptografía necesarias apra algunso protocolos como SSL*
- [Debugger](https://nodejs.org/api/debugger.html) - *Utilidades de depuración*
- [DNS](https://nodejs.org/api/dns.html) - *Gestion y resolución de nombres de Dominios*
- [Domain](https://nodejs.org/api/domain.html) - *DEPRECIADO*
- [Errors](https://nodejs.org/api/errors.html) - *Gestión de errores*
- **[Events](https://nodejs.org/api/events.html)** - *Permite gestionar y crear eventos*
- **[File System](https://nodejs.org/api/fs.html)** - *Permite manipular y crear ficheros en el sistema*
- [Globals](https://nodejs.org/api/globals.html) - *Ámbito global*
- **[HTTP](https://nodejs.org/api/http.html)** - *Gestión del protocolo HTTP*
- **[HTTPS](https://nodejs.org/api/https.html)** - *Gestión del protocolo HTTPS (http y tls/ssl)*
- **[Modules](https://nodejs.org/api/modules.html)** - *Gestión y carga de módulos*
- [Net](https://nodejs.org/api/net.html) - *Nos aporta una capa de red asíncrona y permite gestionar "streams" tanto cliente como servidor.*
- [OS](https://nodejs.org/api/os.html) - *Información básica sobre el sistema operativo en el que estamos funcionando*
- **[Path](https://nodejs.org/api/path.html)** - *Gestión de rutas dentro del sistema (navegación de carpetas y archivos)*
- **[Process](https://nodejs.org/api/process.html)** - *Objeto global que gestiona el proceso del sistema que representa nuestra ejecución de Node*
- [Punycode](https://nodejs.org/api/punycode.html) - *Sintaxís de codificación a RFC 3492 y RFC 5891*
- **[Query Strings](https://nodejs.org/api/querystring.html)** - *Manipualción y gestion de cadenas URL*
- [Readline](https://nodejs.org/api/readline.html) - *Puede leer línea a línea información de entrada como la consola*
- [REPL](https://nodejs.org/api/repl.html) - *Read-Eval-Print-Loop (REPL)*
- **[Stream](https://nodejs.org/api/stream.html)** - *Interfaz abstracta usada por otros módulos para gestionar el flujo de la información*
- **[Timers](https://nodejs.org/api/timers.html)** - *Funciones globales de tiempo como setInterval, clearInterval, etc...*
- [TLS/SSL](https://nodejs.org/api/tls.html) - *Capa de encriptación basada en OpenSSL*
- [UDP/Datagram](https://nodejs.org/api/dgram.html) - *Gestión del protocolo UDP*
- **[URL](https://nodejs.org/api/url.html)** - *Facilita la resolución y parseo de URLs*
- **[Utilities](https://nodejs.org/api/util.html)** - *Utilidades varias, la mayoría depreciadas*
- [V8](https://nodejs.org/api/v8.html) - *Información sobre v8*
- [VM](https://nodejs.org/api/vm.html) - *Permite aislar código en "sandboxes"*
- [ZLIB](https://nodejs.org/api/zlib.html) - *Permite trabajar con Gzip/Gunzip, Deflate/Inflate y DeflateRaw/InflateRaw*


### HTTP

- **Hello World con HTTP:**
```javascript
  var http = require('http');
  
  var puerto = 3000;
  var direccion = "127.0.0.1";
  var mensaje = 'Hola a todos, ahora usando HTTP\n';
  
  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(mensaje);
  }).listen(puerto, direccion);
  console.log('Server running at http://'+direccion+':'+puerto+'/');
```

- **Hello World desde c9.io:**
```javascript
  var http = require('http');
  
  var mensaje = 'Hola a todos, ahora usando HTTP con C9.io\n';
  
  http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(mensaje);
  }).listen(process.env.PORT, process.env.IP);
  
  console.log('Server running at http://'+process.env.IP+':'+process.env.PORT+'/');
```

- **Rediccionamiento:**
```javascript
  var http = require('http');
  
  http.createServer(function (req, res) {
    res.writeHead(301, {
      'Location': 'http://www.google.es/'
    });
      res.end();
  }).listen(process.env.PORT, process.env.IP);
  
  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
```

- **Ping (petición http):**
```javascript
    var url = "google.es";
    
    http.get({ host: url }, function(resOrigen) {
    
        http.createServer(function (req, res) {
           
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("La respuesta de " +url+" es "+resOrigen.statusCode );
            console.log("La respuesta de " +url+" es "+resOrigen.statusCode );
    
        }).listen(process.env.PORT, process.env.IP);
        
        console.log('Servidor disponible en http://'+process.env.IP+':'+process.env.PORT+'/');
    
    
    }).on('error', function(e) {
        
        http.createServer(function (req, res) {
           
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("La respuesta de " +url+" genera un error - " + e.message  );
    
        }).listen(process.env.PORT, process.env.IP);
        
        console.log('Servidor disponible en http://'+process.env.IP+':'+process.env.PORT+'/');
        console.log("Tenemos un error!! - " + e.message);
    });
```

- **[Objeto Request](https://nodejs.org/api/http.html#http_http_request_options_callback)**
- **[Objeto Response](https://nodejs.org/api/http.html#http_class_http_serverresponse)**
- **[Guide - Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)**
 

### URL

- **Leyendo urls:**
```javascript
  var url = require('url');
  
  var demoURL = "http://localhost:3000/ruta?parametro=dato#detalle";
  
  console.log("El host: "+url.parse(demoURL).hostname);
  console.log("El puerto: "+url.parse(demoURL).port);
  console.log("La ruta: "+url.parse(demoURL).pathname);
  console.log("La parametro: "+url.parse(demoURL).query);
  console.log("El hash(#): "+url.parse(demoURL).hash);
```

- **Trabajando con rutas:**
```javascript
  var http = require('http'),
      url = require('url');

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
  
    if (pathname === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Index!');
      
    } else if (pathname === '/otro') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('sencillamente otra página');
      
  
    } else if (pathname === '/alindex') {
        res.writeHead(301, {
        'Location': '/'
      });
      res.end();    
      
    } else {
        res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('Querido... 404!');
    }
    
  }).listen(process.env.PORT, process.env.IP);
  
  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
```

- **Ping recurrente (consola):**
```javascript
      var http = require('http');
      var url = "google.es";
      var tiempo = 3500;
      
      setInterval(function() {
          http.get({ host: url }, function(res) {
              if (res.statusCode === 200 ) {  
                  console.log("Sin errores en " +url);
              } else {
                  console.log("Respuesta Http "+res.statusCode+" en " +url);
              }    
          }).on('error', function(e) {
                  console.log("Con errores -> La respuesta de "+url+" es "+e.message  );
          });
      }, tiempo);
```


### Ejercicios

2 - Crea las rutas básicas para tener una página web clásica (¿Quienes somos? | ¿Donde Estamos? | ¿Que hacemos? | Contacto... etc...)

```javascript
    // Tu solución
```


### Asincronía:

> El modelo de programación de Node.js es monohilo, asíncrono y dirigido por eventos. 
1. No puede haber código bloqueante o todo el servidor quedará bloqueado y esto incluye no responder a nuevas peticiones entrantes.
2. La asincronicidad implica que no sabemos cuándo ni en que orden se va a ejecutar el código, generalmente esto no es importante pero en ocasiones sí lo es y habrá que tenerlo en cuenta.
3. En caso de error inesperado debemos capturarlo y controlar el posible estado en que haya podido quedar la ejecución del código.
> Nicolas Nombela en [nnombela](http://nnombela.com/blog/2012/03/21/asincronicidad-en-node-dot-js/)

- **Sincrónico - código bloqueante:**

```javascript
    var http = require("http");
    var numeroPeticion = 1
    
    function writeResponse(response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hola Mundo!, numero de peticion "+numeroPeticion);
        response.end();
        console.log("Se termino... "+numeroPeticion);
    }
    
    function sleepSynch(seconds, response) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + Math.floor((Math.random() * 1000) + 500) * seconds) {
            // Nada pasa....
        }
        writeResponse(response);
    }
    
    http.createServer(function(request, response) {
        console.log("Empezo... "+numeroPeticion);
        sleepSynch(10, response);
        numeroPeticion++;
    }).listen(process.env.PORT);
    
    console.log("en puerto ->" + process.env.PORT);
```

- **Asincronico - timeOut()**

```javascript
    var http = require("http");

    function writeResponse(response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hola Mundo!");
        response.end();
        console.log("Se termino... ");
    }

    function sleepAsynch(seconds, response) {
        setTimeout(function() {
        writeResponse(response);
        }, Math.floor((Math.random() * 1000) + 100) * seconds);
    }

    http.createServer(function(request, response) {

        console.log("Empezo... ");
        sleepAsynch(10, response);
    }).listen(process.env.PORT);
    
    console.log("en puerto ->" + process.env.PORT);
```


### Mantener Node funcionando

-  Se cierra:
```javascript
  setTimeout(function (){
    process.stdout.write("Cerrando Node...")
  }, 1000)
```

- Se mantiene:
```javascript
  setInterval(function (){
    // Nada pasa... pero sigo funcionando
  }, 1000)
```
  
- Programando una salida:
```javascript
  var contador = 0
  setInterval(function (){
    contador++
    if(contador > 10){
      process.exit()
    } else {
        console.log("Sigo. Valor contador -> "+contador +"\n")
    }
  }, 1000);
``` 


### File System

- **Leer un archivo**
```javascript
  var fs = require('fs');
  fs.readFile('archivo.txt', 'utf8', function (err, data) {
      if (!err) {
        console.log(data);
      } else {
        throw err;
      }
  });
```

- **Escribir un archivo**
```javascript
  var fs = require('fs'),
      data = "y esto... se guardará en el archivo.txt";
  fs.writeFile('archivo.txt', data, function (err) {
    if (!err) {
      console.log('Datos guardados en el archivo.txt');
    } else {
      throw err;
    }
  });
```

- **Usando Promesas y Callbacks**

```javascript
var fs = require("fs");

// Con CallBacks!
fs.readFile("./miArchivo.txt", function(error, content){
	console.log("Leyendo el archivo...");
	fs.writeFile("./logitud.txt", content.length, function(error){
	    if (error) {
	        console.log("error! ", error);
	    } else {
		    console.log("Terminado... hemos almacenado una cadena que vale ",content.length);
	    }
	});
});



// Con Promesas!

function leerArchivo (nombre) {
	return new Promise(function(resolver, rechazar){
		fs.readFile(nombre, function(error, contenido) {
			console.log("Empezando la lectura de ", nombre);
			if(error){
				console.log("Error en la lectura");
				return rechazar(error);
			}
				console.log("Lectura finalizada en ", nombre);
				resolver(contenido);
		});
	});
}

function escribirArchivo (nombre, contenido){
	return new Promise(function(resolver, rechazar){
		fs.writeFile(nombre, contenido, function(error){
			if(error){
				console.log("Error en la escritura de ", nombre);
				rechazar(error);
			} else {
				console.log("Escritura Termianda en ", nombre);
				resolver();
			}
		});
	});
}


//Opción1
leerArchivo("./miArchivo.txt")
.then(function(contenido){
    escribirArchivo("./longitud.txt", contenido);
})
.catch(function(error){
	console.log("Promesas con errores: ");
	console.log(error);
});



//Opción2
Promise.all([
	leerArchivo("./otros.txt"),
	leerArchivo("./usuarios.txt"),
	leerArchivo("./mas_cosas.txt")
	]).then(function(respuestas){
		console.log("Tenemos un total de "+respuestas.length+" respuesta/s.");
		console.log("El primero tiene "+respuestas[0].length+" caracteres");
		console.log("El segundo tiene "+respuestas[1].length+" caracteres");
		console.log("El tercero tiene "+respuestas[2].length+" caracteres");
	});


//Opcion3
Promise.race([
	leerArchivo("./otros.txt"),
	leerArchivo("./usuarios.txt"),
	leerArchivo("./mas_cosas.txt")
	]).then(function(respuesta){
		console.log("El más rápido tiene solo "+respuesta.length+" caracteres.");
	});
```


- **[Más métodos para:](https://nodejs.org/api/fs.html)**
	- Síncronos
	- Escucha de cambios
	- Manipulación de carpetas
	- etc...

### Events

![events](https://www.safaribooksonline.com/library/view/nodejs-the-right/9781941222355/images/eventloop.png)
- Patrón Observador
- Similar al navegador

- **Suscribiendonos a eventos**
	- Sin eventos
	```javascript
		var http = require('http');
		
		var server = http.createServer(function (request, response) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.end("¡Hola people!");
		}).listen(process.env.PORT);
		
		console.log('Servidor escuchando por el puerto ' +process.env.PORT);
	```
	- Con eventos
	```javascript
		var http = require('http');
		
		var server = http.createServer().listen(process.env.PORT);
		
		server.on('request', function (request, response) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.end("¡Hola people!");
		});
		
		console.log('Servidor escuchando por el puerto ' +process.env.PORT);
	```
- **Ejemplo sencillo: Creando nuestros eventos**
```javascript
  var eventos = require('events');
  
  var EmisorEventos = eventos.EventEmitter; 
  var ee = new EmisorEventos(); 
  ee.on('datos', function(fecha){ 
     console.log(fecha); 
  }); 
  setInterval(function(){ 
     ee.emit('datos', Date.now()); 
  }, 500);
```

- **Ejemplo: Juguemos al Ping-Pong**
```javascript
	var EventEmitter = require('events').EventEmitter;
	var pingPong = new EventEmitter();
	
	var pingNumero = 1;
	
	console.log('Bienvenido al juego de Ping/Pong!');
	console.log('Empezamos en 5 segundos....');
	
	setTimeout(function(){
	  console.log('Primer Ping... que desencadenará el juego');
	  pingPong.emit('ping', pingNumero);
	  pingNumero++;
	}, 5000);
	
	pingPong.on('ping', function(numero) {
	  console.log('Llegó el Ping('+numero+'). Emitimos Pong');
	  setTimeout(function(){
	    pingPong.emit('pong');
	  }, 1000);
	});
	
	pingPong.on('pong', function() {
	  console.log('Llegó el Pong. Emitimos Ping');
	  setTimeout(function(){
	    pingPong.emit('ping', pingNumero);
	    pingNumero++;
	  }, 1000);
	});
	
	var pingLogger = function(numero) {
	  console.log('Llegó el Ping ('+numero+') al nuevo listener');
	}
	
	setTimeout(function(){
	  console.log('Añadiendo un nuevo listener a Ping');
	  pingPong.on('ping', pingLogger);
	}, 10000);
	
	setTimeout(function(){
	  console.log('Eliminando el último listener');
	  pingPong.removeListener('ping', pingLogger);
	}, 12000);
	
	console.log('Nota: Recuerda que los Eventos nos ayudan con la asincronía, ¿no?');
```

- [The JavaScript Event Loop: Explained](http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
  
### Process

- **[Códigos de salida en Node.js](https://nodejs.org/dist/latest-v4.x/docs/api/process.html#process_exit_codes)**
	- 1 - *Uncaught Fatal Exception - No ha podido ser capturada*
	- 2 - **Unused (reserved by Bash for builtin misuse)**
	- 3 - *Internal JavaScript Parse Error *
	- 4 - *Internal JavaScript Evaluation Failure *
	- 5 - *Fatal Error - There was a fatal unrecoverable error in V8.*
	- 6 - *Non-function Internal Exception Handler*
	- 7 - *Internal Exception Handler Run-Time Failure*
	- 8 - **Unused**
	- 9 - *Invalid Argument*
	- 10 - *Internal JavaScript Run-Time Failure *
	- 12 - *Invalid Debug Argument*
	- 128 - *Signal Exits - El sistema operativo acaba con Node.*


- **process.argv:**
```javascript
  console.log(process.argv)
  /*
  1. ubicacion de node (bin)
  2. ubicación del script (location)
  3. [Otros parametros]
  */
  
```

- **Detalles del sistema**
```javascript
	process.argv[2] = process.argv[2] || "Node.js funcionando desde C9.io";

	console.log("===================================");
	console.log("Id: " + process.pid);
	console.log("Título: " + process.title);
	console.log("Ruta: " + process.execPath);
	console.log("Directorio Actual: " + process.cwd());
	console.log("Node Versión: " + process.version);
	console.log("Plataforma: " + process.platform);
	console.log("Arquitectura: " + process.arch);
	console.log("Tiempo activo: " + process.uptime());
	console.log("Versiones Dependencias: ");
	process.argv.forEach((val, index, array) => {
	      console.log(`${index}: ${val}`);
	});
	console.log("===================================");
```

- **console.log("Hola"):**
```javascript
  var mensaje = "Hola"
  process.stdout.write(mensaje + '\n')
```

**Captura de errores inesperados**
```javascript
  process.on('uncaughtException', function (err) {
  	console.error(error.stack);
  });
```
- Es interesante almacenar estos errores o enviarlos por email.
- Estos errores se escapan del sistema convencional de errores.

**Ejecucción de tareas antes de la finalización del proceso**
```javascript
  process.on('exit', function (err) {
  	// Limpiar cache.. y cosas similares...
  });
```

**Captura de [señales en entronos UNIX](https://www.wikiwand.com/en/Unix_signal)**

```javascript
// SIGINT -> Control-C

process.stdin.resume(); // Evitamos que se cierre Node.js

process.on('SIGINT', function() {
  console.log('Llegó SIGINT. Control-C... Saliendo...');
  process.exit(0);
});
```

### Creando ejecutables
- Solo para entornos UNIX

- Necesitamos *shebang*
```javascript
	#!/usr/bin/env node
	console.log('Soy un script!');
```

- Necesitamos hacer el script ejecutable
```
chmod +x mi_escript_archivo.js
```

- Ejecutando el script
```
./mi_escript_archivo.js <parámetro>
```

**Ejemplo: hola**
```javascript
#!/usr/bin/env node
console.log("hola");
process.exit(1);
```

**Arrancar Scripts al incio del sistema**
- Librerías:
	- [node-upstarter](https://github.com/carlos8f/node-upstarter) 


### Ejercicios

**1 - ** Realiza un script ejecutable que nos muestre la información de los terremotos acontecidos en la última hora.
- [Fuente de datos](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
- Requisitos:
	- Debemos utilizar párametros cuando se ejecute para definir la magnitud de los terremotos que queremos
	- Si no se detecta el parámetro... la aplicación debe cerrarse.
	- Si el parametro es incorrecto también.
	- Ajustaremos la petición http en función del parámetro. 
- Apariencia(Orientativa):
```
*****************************
USGS All Earthquakes, Past Hour
   ---------------------     
total: 8
status: 200
   ---------------------     
5/10/2016, 3:46:30 PM
==============================
M 1.3 - 6km WNW of Anza, California
5/10/2016, 3:43:01 PM
Magnitud: 1.32
Estatus: automatic
Tipo: earthquake
Lugar: 6km WNW of Anza, California
Coordenadas: -116.7246704 , 33.5830002
Info: http://earthquake.usgs.gov/earthquakes/eventpage/ci37563240
Detalles: http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci37563240.geojson
==============================
... (por cada terremoto de los iguales a los iguales)
```

Solución:
```javascript
    // Tu solución
```


###  Child Process
- Ideal para tareas pesadas, inestables o muy lentas
- Nos permite usar comandos del sistema.
- Podemos lanzar aplicaciones basadas en otros lenguajes o sistemas.

- **Creando hijos y usando spawn**
-  *spawn* devuelve un *stream*
```javascript
var spawn = require('child_process').spawn;
var ping = spawn('ping', ['fictizia.com']);

ping.stdout.setEncoding('utf8');
ping.stdout.on('data', function (data) {
  console.log(data);
});
```

- **Creando hijos y usando exec**
-  *exec* retorna un *buffer*
```javascript
  var exec = require('child_process').exec

  // cat solo funciona en UNIX
  exec('cat texto.txt', function (err, stdout, stderr) {
    if(!err){  
        console.log('El contenido de nuestro archivo', stdout)
    } else {
        console.log('Error: '+err)
    }
  })
```

- **Manejando hijos:**
```javascript
  var spawn = require('child_process').spawn

  if(process.argv[2] === 'hijo'){
    console.log('Estoy dentro del proceso hijo');
  } else {
    var hijo = spawn(process.execPath, [__filename, 'hijo'])
    hijo.stdout.pipe(process.stdout)
  }

```

- **Manejando hijos (con heréncia):**
```javascript
  var spawn = require('child_process').spawn

  if(process.argv[2] === 'hijo'){
    console.log('Estoy dentro del proceso hijo');
  } else {
    var hijo = spawn(process.execPath, [__filename, 'hijo'], {
      stdio: 'inherit'
    })
  }

```

- **Manejando hijos (contexto común):**
```javascript
  var spawn = require('child_process').spawn;

  var contador = 0;
  contador += 1;

  if(process.argv[2] === 'hijo'){
    console.log('hijo', contador);
    contador++;
    console.log('pero.. además el hijo.. suma otra! y son', contador);
  } else {
    var hijo = spawn(process.execPath, [__filename, 'hijo'], {
      stdio: 'inherit'
    });
    console.log('padre', contador);
  }

```

### Cluster

- **Sin usar Cluster**
```javascript
    var http = require('http');
    var url = require('url');

    var server = http.createServer().listen(process.env.PORT);

    server.on('request', function (req, res) {
        var pathname = url.parse(req.url).pathname;
        if (pathname === '/matame') {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Has matado el monohilo. PID: ' + process.pid);
            process.exit(0);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Hola desde el monohilo. PID: ' + process.pid);
        }
    });

    console.log('Servidor escuchando por el puerto ' +process.env.PORT);
```

- **Usando Cluster.**
	- El proceso hijo que cae se vuelve a levantar.
	- El proceso padre se mantiene "separado"

```javascript
	var cluster = require('cluster'),
	    http = require('http'),
	    url = require('url'),
	    cpus = require('os').cpus().length; // nproc
	
	if (cluster.isMaster) {
	    console.log('Proceso maestro con PID:', process.pid);
	
	    for (var i = 0; i < cpus; i++) {
	        cluster.fork();
	    }
	
	    cluster.on('exit', function(worker) {
	        console.log('hijo con PID ' + worker.process.pid + ' muerto');
	        cluster.fork();
	    });
	
	} else {
	    console.log('Arrancado hijo con PID:', process.pid);
	
	    var server = http.createServer().listen(process.env.PORT);
	
	    server.on('request', function (req, res) {
	        var pathname = url.parse(req.url).pathname;
	        if (pathname === '/matame') {
	            res.writeHead(200, {
	                'Content-Type': 'text/plain'
	            });
	            res.end('Has matado al proceso hijo ' + process.pid);
	            process.exit(0);
	        } else {
	            res.writeHead(200, {
	                'Content-Type': 'text/plain'
	            });
	            res.end('Hola desde ' + process.pid);
	        }
	    });
	}
```

- [Taking Advantage of Multi-Processor Environments in Node.js](http://blog.carbonfive.com/2014/02/28/taking-advantage-of-multi-processor-environments-in-node-js/#tldr)

- **Librerias:**
	- [luster](https://github.com/nodules/luster)
	- [cluster-map](https://www.npmjs.com/package/cluster-map)
	- [PM2](https://www.npmjs.com/package/pm2)

### Buffer
- Nos ofrece la posibilidad de alamacenar datos sin procesar
- Una vez iniciados no puede modificarse el tamaño
- Tamaño máximo 1GB
```javascript
const buf1 = new Buffer(10); // buf1.length = 10
const buf2 = new Buffer([1,2,3]); // [01, 02, 03]
const buf3 = new Buffer('prueba'); // ASCII [74, 65, 73, 74]
const buf4 = new Buffer('ñam ñam', 'utf8'); // UTF8 [74, c3, a9, 73, 74]
  
console.log("===================================");
console.log("buf1: " + buf1.length);
console.log("buf2: " + buf2[0]);
console.log("buf3: " + buf3);
console.log("buf3 (hex): " + buf3.toString('hex'));
console.log("buf3 (base64): " + buf3.toString('base64'));
console.log("buf4: " + buf4);
console.log("buf4 (hex): " + buf4.toString('hex'));
console.log("buf4 (base64): " + buf4.toString('base64'));
console.log("===================================");
```


### Stream
- Gestionamos el *flujo de datos*
- Muy usados por librerías y modulos
- Capa de abstracción para operaciones con datos
- Lógica de tuberias (cadena de procesos)
- Gestiona el *buffer* por si mismo
- Tipos:
	- Redeable *Lectura*
		- Eventos (data, error, end)
	- Writable *Escritura*
		- Eventos (drain, error, finish)
	- Duplex *Ambos*
	- Transform *Transformación de datos*
	- PassThrough *No manipula, solo manipula*
- **Función .pipe()**
	- Simple: 
	`origen.pipe(destino);`
	- Concatenando:
	`origen.pipe(destino).pipe(otroDestino);`

- **Ejemplo: Stream multimédia**
```javascript
	var http = require('http'),
	    fs = require('fs');
	
	http.createServer(function(req, res) {
	  var cancion = 'cancion.mp3';
	  var stat = fs.statSync(cancion);
	
	  res.writeHead(200, {
	    'Content-Type': 'audio/mpeg',
	    'Content-Length': stat.size
	  });
	
	  var readableStream = fs.createReadStream(cancion);
	  readableStream.pipe(res);
	
	}).listen(process.env.PORT);
```

- **Stream y ficheros**
```javascript
    var fs = require('fs');
    
    var lectura = fs.createReadStream('archivo1.txt');
    var escritura = fs.createWriteStream('otroArchivo.txt');
    
    lectura.pipe(escritura);
```


### Variables del Entorno

- Conocer todas las variables disponibles en el entorno
	- Windows: 
	```
		env
	```
	- UNIX: 
	```
		SET
	```

- Guardar nuevas variables en el entorno
	- Windows: 
	```
		SET ALGO='mi secreto'
	```
	- UNIX: 
	```
		export ALGO='mi secreto'
	```
	
- Recuperar las variables con Node.js
	```javascript
		var datoRecuperado = process.env.ALGO;
		console.log(process.env.ALGO);
	```

- Creando variables del entorno limitadas a Node.js y temporales (SOLO UNIX)
	- Arrancando... 	
	```
		NODE_ENV=production node app.js
	```
	- Usando datos...
	```javascript
		if(process.env.NODE_ENV === "production"){
			console.log("Entramos en modo producción");
		} else if (process.env.NODE_ENV === "development"){
			console.log("Entramos en modo desarrollo");
		} else {
			console.log("Entramos en modo desconocido. ¡Revisa las variables del entorno!");
		}
	```	
	
- **Alternativas**
	- [dotenv - librería para Nodejs](https://github.com/motdotla/dotenv)

### Modularización
- Especificación de [CommonJS](https://www.wikiwand.com/en/CommonJS)
- Exports es un objeto que vamos "rellenando"
- La asignacion al exports es inmediata. No se pueden usar callbacks o similares
- No es necesario usar *module.exports* ya es que es global.
	- `var exports = module.exports = {};`
- Es importante controlar la reasignación de *module.exports*

### Modularización: Usando exports

- **Exportar los datos:**
```javascript
// archivo -> config.js

var datoPrivado = "Lo que pasa en Node... se queda en Node";
var datoCompartido = "Hola! desde Config.js"

function privada (){
	return datoPrivado;
}

exports.metodo = function () {
	console.log(datoCompartido);
	console.log(privada());
}
exports.mensaje = datoCompartido;
```

- **Importar los datos:**
```javascript
var config = require('./config');

config.metodo();
console.log(config.mensaje);
```

### Modularización: Usando module.exports

- **Exportar los datos:**
```javascript
// archivo -> config.js
var config = {
  token: "<--- MiSecreto--->",
};

module.exports = config;
```

- **Importar los datos:**
```javascript
var config = require('./config');

console.log(config.token);
```

### NPM

![npm_logo](http://ohdoylerules.com/content/images/npm-logo.svg)

- **Instalar paquetes:**
  - global:
```
    npm install -g <paquete>
```  

  - local:
```
    npm install <paquete>
```    


- **Buscar paquetes**
```
    npm search <paquete>
```

- **Información de los paquetes**
```
    npm view <paquete>
```

- **Lista de paquetes instalados**
```
    npm ls
```

- **Lista de paquetes instalados globalmente**
```
    npm ls -g
```


- **Instalando versiones especificas:**

  - la más reciente:
```  
    npm install <paquete>@latest
```  
  
  - versión especifica:
```  
    npm install <paquete>@1.x (1.xx.xx)
```
  
  - Otra versión especifica
```
    npm install <paquete>@2.10.x (2.10.x)
```

- **Paquetes desactualziados:**
```
  npm outdated
```
  
- **Actualizando paquetes:**
```
  npm update <paquete>
```

- **Desinstalando paquete:**
```
  npm uninstall <paquete>
```

- **Información sobre Bugs**
```
  npm bugs <paquete>
```

- **[Más comandos - CLI](https://docs.npmjs.com/cli/install)**

### Dependency Hell:

**Abyssus abyssum invocat. El abismo llama al abismo.**

- [nipster](http://nipstr.com/)
- [Nodei.co](https://nodei.co/)
- [Dependency Hell](http://www.wikiwand.com/en/Dependency_hell)
- [David Dm](https://david-dm.org/)
   - [Ejemplo Twitter-sentiments](https://david-dm.org/UlisesGascon/twitter-sentiments#info=dependencies&view=list)
   - [Ejemplo Grunt](https://david-dm.org/gruntjs/grunt#info=dependencies&view=table)
   - [Ejemplo Express](https://david-dm.org/strongloop/express)
   - [Ejemplo Bower](https://david-dm.org/bower/bower#info=dependencies&view=table)
- [ShieldsIO](http://shields.io/)
   - [Your Badge Service](http://badges.github.io/gh-badges/) 

### Seguridad:
- [Seguridad](https://nodesecurity.io/resources)
- [Seguridad Avisos](https://nodesecurity.io/advisories)
- [Recursos](https://nodesecurity.io/resources)

### package.json

- Datos proyecto
- Tareas
- Dependencias (dependencies y devDependencies)
- **[Documentación](https://docs.npmjs.com/files/package.json)**

- **Creación:**
```
  npm init
```
  
- **Guardar nuevas dependencias:**
```
 npm install <paquete> --save
```

- **Guardar nuevas dependencias (solo para entorno desarrollo):**
```
 npm install <paquete> --save -dev
```

- **Guardando versiones especificas:**
  - (1.xx.xx):
```
  npm install --save <paquete>@1.x
```
  
  - (2.10.x)
```
  npm install --save <paquete>@2.10.x
```
  
  - Latest
```
  npm install --save <paquete>@lastest
```
  
- **Quitando dependencias:**
```
  npm uninstall <paquete> --save
```
  
- **Instalamos las dependencias en el proyecto:**
  - todo:
```
  npm install (todo)
```
  
  - Solo production:
```
  npm install --production (solo producción)
```
  
  - Solo development:
```
  npm install --dev
```

- **[Semantic Versioning](http://semver.org/lang/es/)**
	- Estructura -> X.Y.Z-Extra 
	- Cambio Mayor - *No retrocompatible*
	- Cambio Menor - *Retrocompatible - Nuevas funcionaldiades o cambios*
	- Parche - *Retrocompatible - Solución de errores*
	- Extras - Indicativos o versiones especiales (Beta, Alfa, x86, etc...)

### npm scripts (comandos de CLI)

- **Añadiendo comandos:**

```javascript
  // ...
  "scripts": {
      "test": "npm -v",
      "start": "node -v",
      "hola": "echo 'Hola mundo!'"
  }
  // ...
```
- **Mostrando todos los comandos:**
```
    npm run
```

- **Ejecutando comandos:**
  - test
```
    npm test
```

  - start
```
    npm start
```

  - hola
```
    npm run hola
```  

### Ejercicios

1 - Crearemos varios scripts para automatizar tareas.
- Verificador de versiones para NPM y Nodejs
- Verificador del status de Git
- Descargar (Clonar) Bootstrap de Github
- Descargar (Clonar) nuestro curso de Github
- Emoji al azar con [emoji-random](https://www.npmjs.com/package/emoji-random)

```javascript
    // Tu solución
```


### NVM  (manejando varias versiones de Node)

- **Comrpobando la version de NVM:**
```
    nvm --version
```

- **Instalando una version:**
```
    nvm install 0.12
```

- **Desinstalando una version:**
```
    nvm uninstall 0.12
```

- **Usar una version (globalmente):**
```
  nvm use 0.12
```
  
- **Usando versiones (por proyecto):**
```
    echo 0.12 > .nvmrc
```
  
```
    nvm use
```


### Actualizando Node (método alternativo)
- Sin soporte a Windows
- Instalando el [paquete n](https://www.npmjs.com/package/n)
```
npm install -g n
```
- **Opciones**
```
  n                              Output versions installed
  n latest                       Install or activate the latest node release
  n -a x86 latest                As above but force 32 bit architecture
  n stable                       Install or activate the latest stable node release
  n lts                          Install or activate the latest LTS node release
  n <version>                    Install node <version>
  n use <version> [args ...]     Execute node <version> with [args ...]
  n bin <version>                Output bin path for <version>
  n rm <version ...>             Remove the given version(s)
  n --latest                     Output the latest node version available
  n --stable                     Output the latest stable node version available
  n --lts                        Output the latest LTS node version available
  n ls                           Output the versions of node available
```

### Malas Prácticas:
- No tener en cuenta los problemas de portabilidad. Cada sistema operativo tiene sus propios comandos (Unix vs. Win).
- Forzar al sistema operativo a continuar la ejecucción de Node
	- `process.stdin.resume();`
- Objetos globales al estilo *window*. **Mala idea**
```javascript
	global.config = require('config');
```
- Usar dependencias de otros modulos directamente al nivel de la aplicación
```javascript
	require('./node_modules/express/node_modules/connect')
```
- No entender las dependencias cruzadas de tu proyecto
- No estudiar tus dependencias directas
- No desarrollar tus propias librerías de utilidades y recursos comunes para situaciones recurrentes
- No entender la filosofía de JavaScript
- Actualizarte siguiendo tu instinto o reglas fijas como SemVer.
- Sigue las modas... aplicando filosofías y frameworks que estan pensados para resolver situaciones distintas a la tuya.

### Buenas Práticas:
- Anclar las versiones de las dependéncias en el *package.json*
	- Mal 
	```javascript
		//...
		"dependencies": {
			"express": ">=3.2.0"
		},
		//...
	```
	- Bien
	```javascript
		//...
		"dependencies": {
			"express": "3.2.0"
		},
		//...
	```
- Modulos, modulos y más modulos... estructura tu codigo en archivos y agrupalo por funcionaldiades. 
- Trabaja tu propio codigo como si de librerías se tratara.
- El alma de tu aplicación es *package.json*. Mantenlo al día
- Piensa en los demás. ¡No trabajas solo! Documenta, testea, estructura y encapsula.
- Manten en mente los diversos entornos (development, production y que tu aplicación se adpate fácil)
```javascript
		//config
		module.exports: {
			'production': {
				token: "xxxxx",
				port: 8080
				//etc...
			},
			'development': {
				token: "yyyyy",
				port: 3000
				//etc...
			}
		}
```
- Programa siempre pensando en que se puedan intercambiar las piezas, librerías y modulos evolucionan a otro ritmo que tu proyecto.
- Programa pensando en la estructura.
- Refactoriza amenudo.
- Se la corriente en el rio y no la piedra. Respeta el principio de ([no acción 无为](https://www.wikiwand.com/es/Wu_wei));
- La flexibilidad de JavaScript es tu mejor aliado.
- No anides en exceso, usa manejadores y otros artilúgios
![funciones en funciones](https://jordankasper.com/js-testing/images/meme-functions.jpg)
- La velocidad en Node... se basa en eventos. Usa eventos, emite tus propios eventos.
- No se trata de hacer asíncrono lo que es síncrono... sino de pensar asincronamente.
![cuchara](https://i.ytimg.com/vi/huPf4MgPrlI/hqdefault.jpg)
