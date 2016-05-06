# Clase 1

### Masterclass "Test unitarios con JavaScript" el sábado 21 de Mayo

![test unitarios](http://www.fictizia.com/assets/imgs/blog/articles/29/masterclass-Testing-JS.jpg)
![logos_testing](http://fictizia.com/assets/imgs/blog/articles/29/logos-testing.jpg)

- [Más Info](http://www.fictizia.com/actualidad/masterclass-testing-unitarios-con-javascript)

### JavaScript

![js_logo](http://www.fictizia.com/assets/styles/styleImgs/wideBox/widebox_js.png)

> JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

> Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas aunque existe una forma de JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo. [JavaScript Wikiwand](https://www.wikiwand.com/es/JavaScript)


**Características**
- Multiparadigma
- Imperativo y estructurado
- Dinámico
	- Tipado dinámico
	- Objetual
	- Evaluación en tiempo de ejecución
- Funcional
	- Funciones de primera clase
- Prototípico	
	- Prototipos
	- Funciones constructoras
- Entorno de ejecución
- Funciones varídicas	
- Funciones como métodos
- Arrays y la definición literal de objetos
- Expresiones regulares

**[ECMA-262](https://www.wikiwand.com/es/ECMAScript)**
- Versiones:
	- Versión 1 (Junio de 1997)
	- Versión 2 (Junio de 1998)
	- Versión 3 (Diciembre de 1999)
	- Versión 3 (Abandonado)
	- Versión 5 (Diciembre de 2009)
	- Versión 5.1 (Diciembre de 2011)
	- Versión 6 (Junio de 2015)
	- Versión 7 (En desarrollo)

- **Compatibilidad:**
	- [ECMA6](https://kangax.github.io/compat-table/es6/)
	- [ECMA5](http://kangax.github.io/compat-table/es5/)
	- [Non-standard](http://kangax.github.io/compat-table/non-standard/)
	- [HTML5 & CSS3](http://fmbip.com/litmus/)
	- [Polyfill](https://www.wikiwand.com/en/Polyfill)

- **Compiladores**
	- [Coffeescript](http://coffeescript.org/)
	- [Typescript](http://www.typescriptlang.org/)
	- [Livescript](http://livescript.net/)

- **Librerías**
	- [underscore](http://underscorejs.org/)
	- [Jquery](https://jquery.com/)
	- [Microjs](http://microjs.com/#)
	- [Threejs](http://threejs.org/)
	- [D3.js](http://d3js.org/)
	- [Modernizr](https://modernizr.com/)
	- [Lodash](https://lodash.com/)
	- [mustache.js](https://github.com/janl/mustache.js)
	- [handlebars.js](http://handlebarsjs.com/)
	- [Firebase](http://firebase.com/)

- **Frameworks (MV*)**
	- [Angular.js](https://angularjs.org/)
	- [Ember.js](http://emberjs.com/)
	- [Backbone.js](http://backbonejs.org/)
	- [KnockOut.js](http://knockoutjs.com/)
	- [React](http://facebook.github.io/react/)
	- [Meteor](https://www.meteor.com/)



### Node.js

![Node_logo](http://www.fictizia.com/assets/styles/styleImgs/wideBox/widebox_nodejs.png)

> Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla - [Wikipedia](https://www.wikiwand.com/es/Node.js)


**Otra manera es posible**

![bloqueo](https://sezaman.com/content/images/2016/04/node-drupal-queue-comparison.jpg)


**Puntos Fuertes**
- Asincronía (no bloqueo)
- Backend completo
- NPM (comunidad)
- Single thread (paralelismo)
- Librerías propias
- Utilidades
- Código abierto
- Basado en el V8 (escrito en C) de Google
- Multiplataforma
- Orientado a Eventos
- **No se limita solo a servidores HTTP**

**Librerías interesantes**
- [Node.js](https://nodejs.org/en/)
- [Grunt](http://gruntjs.com/)
- [Gulp](http://gulpjs.com/)
- [Express](http://expressjs.com/es/)
- [MongoDB](https://www.mongodb.org/)
- [Socket.io](http://socket.io/)

### #JSDramas

**IO.js**

![IO_logo or node_logo](https://strongloop.com/wp-content/uploads/2015/06/iovsn.jpg.pagespeed.ce.SGbwroO3EK.jpg)

> io.js has merged with the Node.js project again.
There won't be any further io.js releases. All of the features in io.js are available in Node.js v4 and above.

- [Tiempos turbulentos para la comunidad Node.js, ha nacido io.js](http://www.genbetadev.com/actualidad/tiempos-turbulentos-para-la-comunidad-node-js-ha-nacido-io-js)
- [JavaScript I/O](https://iojs.org/es/)

**Dependencias, dependencias, dependencias... y más dependencias**

```javascript
module.exports = leftpad;
 
function leftpad (str, len, ch) {
  str = String(str);
 
  var i = -1;
 
  if (!ch &amp;&amp; ch !== 0) ch = ' ';
 
  len = len - str.length;
 
  while (++i &lt; len) {
    str = ch + str;
  }
 
  return str;
}
```
- [How one developer just broke Node, Babel and thousands of projects in 11 lines of JavaScript](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)
- [A discussion about the breaking of the Internet](https://medium.com/@mproberts/a-discussion-about-the-breaking-of-the-internet-3d4d2a83aa4d#.r9oqkkuhb)
- [I’ve Just Liberated My Modules](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.mjp6u93c1)
- [Left-pad en GitHub](https://github.com/camwest/left-pad)
- [Is left-pad Indicative of a Fragile JavaScript Ecosystem?](http://developer.telerik.com/featured/left-pad-indicative-fragile-javascript-ecosystem/)
- [Overcoming JavaScript Fatigue](http://developer.telerik.com/topics/web-development/overcoming-javascript-fatigue/)
- [One developer just broke Node, Babel and thousands of projects in 11 lines of JavaScript](https://laravel-news.com/2016/03/one-developer-just-broke-node-babel-thousands-projects-11-lines-javascript/)
- [How 17 Lines of Code Took Down Silicon Valley’s Hottest Startups](http://www.huffingtonpost.com/ken-mazaika/how-17-lines-of-code-took_b_9532846.html)
- [Npm package author revokes his packages, breaking tons of builds](https://evertpot.com/npm-revoke-breaks-the-build/)
- [¿Y si el software Open Source desapareciera?](http://www.xataka.com/servicios/y-si-el-software-open-source-desapareciera)
- [El programador que borró 11 líneas de código y se cargó Internet](http://www.omicrono.com/2016/04/desaparicion-en-node-js-de-left-pad/)

**Cambios, cambios... y más cambios**

![humor](https://camo.githubusercontent.com/fde3ba248dbb5c9c6f630159b9a6d48708f228e6/687474703a2f2f7777772e636f6d6d697473747269702e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f30392f53747269702d5072656e6472652d6c652d747261696e2d656e2d6d61726368652d3635302d66696e616c656e676c697368312e6a7067)

- [State of the Art JavaScript in 2016](https://medium.com/javascript-and-opinions/state-of-the-art-javascript-in-2016-ab67fc68eb0b#.8byumpq6f)
- [If Loving Computers is Wrong, I Don't Want to Be Right](http://blog.codinghorror.com/if-loving-computers-is-wrong-i-dont-want-to-be-right/)
- [Keeping Up and "Just In Time" Learning](http://blog.codinghorror.com/keeping-up-and-just-in-time-learning/)

**The Magpie Developer**
- [The Magpie Developer](http://blog.codinghorror.com/the-magpie-developer/)

**The Sad State of Web Development**
- [El estado del desarrollo Front-End en 2015 por Ashley Nolan](http://ashleynolan.co.uk/blog/frontend-tooling-survey-2015-results)
- [The Sad State of Web Development](https://medium.com/@wob/the-sad-state-of-web-development-1603a861d29f#.62up3vtl1)
- [A response to The Sad State of Web Development — Its not about Javascript really](https://www.reddit.com/r/programming/comments/40rwrk/a_response_to_the_sad_state_of_web_development/)

### C9.io

![c9_logo](https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/8389/vz1XuNqHTyfO4YsqI3f2)

**Características estrella**
- Code together in real time
- Share your IDE, your workspace, a preview, or your running app
- Replay all edits and see your code at any point in time

**Otras características**
- Preview in any browser
- Built-In Terminal
- Language Tools
- Debugger
- Split View
- Themes
- Run Panel
- Key Bindings Editor
- VIM/Emacs/Sublime Mode
- Built-In Image Editor

**Más**
- [Precios y planes](https://c9.io/pricing/webide)
- [Soporte](https://c9.io/support)
- [c9 en GitHub](https://github.com/c9)


### Entorno de desarollo moderno
![Diversos Entornos](http://www.rittmanmead.com/wp-content/uploads/2013/01/NewImage1.png)

### Control de Versiones

**Bienvenidos a la maquina del tiempo**
- Arquitectura de Árbol(working area, staging Area, Repository)
- Auditoria de código (quien? cuando? y que?)
- Git trabaja en binario (imagenes, docs, etc...)
- Git no guarda una copia de cada version, solo los cambios.
- Distribución (Repositorios y Clones)
- Opensource y funciona offline
- Consola vs. GUI

**Trabajo efectivo**

- [Clientes escritorio](https://mac.github.com)
- [Consola (Cheat-sheet)](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
- Repositorio
- Tracking
- Commits
- Sincronizar cambios
- Ramas
- Fork
- Clonación
- Pull-request
- Gestión de merges
- Público/Privado

**Working Flow**

![Como trabajar con Git](http://nvie.com/img/git-model@2x.png)


### Github

- [Socializacion](https://guides.github.com/activities/socialize/)
	- Perfil
- Timeline Actividad
- [Colaborar](https://guides.github.com/activities/contributing-to-open-source/)
- [Compartir](https://guides.github.com/introduction/getting-your-project-on-github/)
- [Gist](https://gist.github.com/)
- [Issues](https://guides.github.com/features/issues)
- [Pages](https://guides.github.com/features/pages/)
- [Wikis](https://guides.github.com/features/wikis)


###Trabajando con Git

**Instalación**

Instalamos [Git - Source Code Management](http://git-scm.com/)

Comprobamos la instalación

```
git --version
```


**Bienvenidos a la maquina del tiempo**
- Arquitectura de Árbol(working area, staging Area, Repository)
- Auditoria de código (quien? cuando? y que?)
- Git trabaja en binario (imagenes, docs, etc...)
- Git no guarda una copia de cada version, solo los cambios.
- Distribución (Repositorios y Clones)
- Opensource y funciona offline
- Consola vs. GUI



**Trabajando en Local**

Configuración (entornos):

[Repositorios locales y remotos](http://media.tumblr.com/tumblr_lbnpoxYtNm1qaku05.png)
![Repositorios locales y remotos](http://media.tumblr.com/tumblr_lbnpoxYtNm1qaku05.png)

- System (todos los usuarios)
    - git config --system
    - etc/gitconfig, /usr/local/git/etc/gitconfig

- Global (mi usuario)
    - git config --global
    - .gitconfig (usuario/root)

- Project (proyecto)
    - git config
    - /proyect/.git/config


**Comandos básicos**

versión
```
git --version
```

Grabando Nombre
```
git config --global user.name "nombre"
```

Comprobando el nombre
```
git config --global user.name
```

Grabando Email
```
git config --global user.email "email"
```

Habilitando colores
```
git config --global color.ui true
```

Ver usuarios en el equipo
```
git config --global --list
```


**GIT Working flow (local) - Básico**

- help (ayuda)

    - Ayuda general
    ```
    git config --global --list
    ```

    - Ayuda especifica
    ```
    git help push
    ```

    - Salir de la ayuda
    ```
    q (quit)
    ```

- init (arranque)
    - Buscamos la carpeta (ls, dir...)
    - Arrancando Git
    ```
    git init
    ```

- status
    - Verificar estado
    ```
    git status
    ```

- add
    - Añadiendo todo
    ```
    git add -A
    ```

    - Añadiendo todo *(como add -A, pero omite los archivos fuera de track)*
    ```
    git add .
    ```

    - Añadiendo un archivo especifico
    ```
    git add loquesea
    ```

- commit
    - Comentando el commit
    ```
    git commit -m "Mi primer commit"
    ```

- log
    - Verificando el estado de los commits
    ```
    git log
    ```

- reset (Reseteamos el proyecto hasta un punto dado (SIN RETORNO!))
    - No afecta al working area ni al Stagging Area, solo al repositorio
    ```
    git reset --soft NUMEROCOMMIT
    ```

    - No afecta al working area
    ```
    git reset --mixed NUMEROCOMMIT
    ```

    - Afecta a todos los niveles incluido el working area
    ```
    git reset --hard NUMEROCOMMIT
    ```

    - En caso de necesitar recuperación.
      Haz un reset --hard hacia delante, con el número del útimo commit.
      ```
      git reset --hard ULTIMOCOMMIT
      ```

    - Devolver un archivo de staging a working area
    ```
    git reset HEAD nombrearchivo
    ```    


**GIT Working flow (local) - Viajar en el tiempo**

- log
    - Hacemos una copia de seguridad de nuestros commits.
    ```
    git log > miscommits.txt
    ```

- checkout

    - Abrimos la maquina de tiempo
    ```
    git checkout NUMEROCOMMIT
    ```

    - Volvemos a Master
    ```
    git checkout master
    ```


**GIT Working flow (local) - Ramas (Branches)**

Ramas (Universos Paralelos)
*Línea master -> linea estable o principal.*
*Lineas secundarias -> lineas de desarrollo, bugs, experimentos, etc...*

- branch

    - Crear una rama
    ```
    git branch NOMBRERAMA
    ```

    - Ver ramas
    ```
    git branch
    ```    

    - Cambiar de rama
    ```
    git checkout NOMBRERAMA
    ```  

    - Ver cambios en formato ramas
    ```
    git log --oneline --graph --all
    ```  

    - Borrar una rama
    ```
    git branch -d NOMBRERAMA
    ```


**GIT Working flow (local) - Fusiones (básico)**

- Nos situamos en la rama que absorberá (principal)
    ```
    git checkout RAMAPRINCIAL
    ```

- Hacemos el *merge*
    ```
    git merge RAMASECUNDARIA
    ```

- Añadir comentario (o)

- Guardar y salir (:x)

- Ramas fusionadas
    ```
    git branch
    ```

- Borramos rama
    ```
    git branch -d NOMBRERAMA
    ```


**GIT Working flow (local) - Fusiones (gestión conflictos)**

  - Fast-forward (automatizado). No hay conflicto alguno.

    - Nos situamos en la rama que absorberá (principal)
    ```
    git checkout RAMAPRINCIAL
    ```

    - Hacemos el MERGE
    ```
    git merge RAMASECUNDARIA
    ```

    - Añadir comentario (o)

    - Guardar y salir (:x)


  - Manual Merge (Conflicto, dos personas tocaron los mismos archivos)

    - Nos situamos en la rama que absorberá (principal)
    ```
    git checkout RAMAPRINCIAL
    ```

    - Hacemos el MERGE
    ```
    git merge RAMASECUNDARIA
    ```

    - En consola
    ```
    Auto-merging CARPETA/ARCHIVO
    CONFLICT (content): Merge conflict in CARPETA/ARCHIVO
    Automatic merge failed; fix conflicts and then commit the result.
    ```

    - En el editor
    ```
    <<<<<<< HEAD
    hello world....!!!!!!!
    =======
    hello world 2 ..!!!
    >>>>>>> conflictiva
    ```

    - Resuelver y guardar
    ```
    hello world 2 ..!!!
    ```

    - Comprobamos el estado
    ```
    git status
    ```

    - commit para la resolución conflicto
    ```
    git commit -am "con este commit se arregla el conflicto"
    ```

    - Resultado
    ```
    *   81a6c1d con este commit se arregla el conflicto
    |\  
    | * 64b5518 que pasa
    * | 29a6348 ahora conflcito..no
    |/  
    * afe16ae Todo arriba..
    * 7c9cc50 Mi primer Commit
    ```

    - Borramos la rama (opcional)
    ```
    git branch -d NOMBRERAMA
    ```


**GITHUB Working flow (básico)**
  - clone
    - Clonar un proyecto ( [Bootstrap](https://github.com/twbs/bootstrap) )
    ```
    git clone https://github.com/twbs/bootstrap.git
    ```

  - log
    - Mirar los commits
    ```
    git log
    ```    


**GITHUB Working flow (Proyecto desde cero)**

  - Creamos los ficheros

  - init
    - monitorizamos los ficheros
    ```
    git init
    ```

  - commit
    - Añadimos los ficheros en un commit
    ```
    git commit -am "Mi primer proyecto"
    ```

  - remote
    - Enlazamos con Github
    ```
    git remote add origin <--HTTPoSSH-->
    ```

    - Comprobamos los detalles
    ```
    git remote -v
    ```

  - push
    - Mandamos los cambios
    ```
    git push origin master
    ```

**GITHUB Working flow (Proyecto en equipo)**
El proceso es igual, pero es necesario mantenerse sincronizado.

  - fetch
    - Actualizar *origin/master* (rama espejo en local)
    ```
    git fetch origin
    ```

  - merge
    - Fusionar *master* con *origin/master*
    ```
    git merge origin/master
    ```

  - commit
    - Preparamos un *commit* para subir un cambio a Github
    ```
    git commit -am "Nuevo cambio"
    ```

  - push
    - Subimos los cambios
    ```
    git push origin master
    ```


**GITHUB Working flow (Proyectos de terceros)**
*Usamos 2 repositorios (ORIGINAL EXTERNO (upstream/master) -> CLON ORIGINAL (origin/master) -> CLON LOCAL)*

  - remote
    - Conectamos al fork (origin)
    ```
    git remote add origin <--- HTTP --->
    ```

    - Verificamos la conexión
    ```
    git remote -v
    ```

    - Conectamos al remoto *(Upstream)*
    ```
    git remote add upstream HTTTPREPO-UPS
    ```

    - Verificamos que tenemos dos enlaces *(origin y upstream)*
    ```
    git remote -v
    ```

  - fetch
    - Comprobamos cambios en *origin*
    ```
    git fetch origin
    ```

    - Comprobamos cambios con *upstream*
    ```
    git fetch upstream
    ```

  - merge
    - Fusionamos *upstream* con local para actualizarnos
    ```
    git merge upstream/master
    ```

  - push
    - Subimos cambios a *origin*
    ```
    git push origin master
    ```

  - Subimos cambios al *upstream (pull-request)*



**GITHUB Working flow (GitHub Pages Manual)**
GitHub Pages nos permite hacer una web estática para nuestro usuario o proyectos

  - clone
    - Clonamos el repositorio
    ```
    git rclone <-- URL.git -->
    ```

  - checkout --orphan
    - Creamos una rama huérfana
    ```
    git checkout --orphan gh-pages
    ```

  - rm
    - Borramos todos los archivos del directorio
    ```
    git rm --rf .
    ```

  - add
    - Creamos nuestro index.html y lo añadimos
    ```
    echo "Bienvenido a gh-pages" > index.html
    git add index.html
    ```

  - commit
    - Preparamos un commit para subir el index a Github
    ```
    git commit -am "Nuevo cambio"
    ```

  - push
    - Subimos el cambio
    ```
    git push origin gh-pages
    ```


**GITHUB Avanzado (Trucos)**


  - branch
    - Renombrar rama
    ```
    git branch -m NOMBRERAMA NOMBRERAMANUEVO
    ```

    - Mostrando todas las ramas (incluido espejos)
    ```
    git branch -a
    ```

  - add + commit
    - am
    ```
    git commit -am "Texto"
    ```

  - config
    - Usando un alias
    ```
    git config --global alias.NOMBREALIAS 'COMANDO'
    git config --global alias.buenlog 'log --oneline --graph --all'
    git buenlog
    ```

  - pull
    - fecht + merge
    ```
    git pull
    ```

  - diff
    - Ver lo que has modificado pero aún no has preparado
    ```
    git diff
    ```

    - Ver los cambios que has preparado y que irán en tu próxima confirmación
    ```
    git diff --cached
    ```

### Trabajando con C9.io

- [Setup Git and basic commands](http://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez)

**Escenarios básicos:**

**Quiero subir algo a Github**

1. Verificamos el estado en general.
 ```
git status
 ```

2. Nos actualizamos.
 ```
git pull
 ```

3. Preparamos nuestro commit (añadimos archivos y añadimos la información adicional)
 ```
git add "ARCHIVO" 
git commit -m "MENSAJE..."
 ```

4. Actualizamos y enviamos los cambios a Github
 ```
git pull && git push
 ```

**No quiero subir nada a Github, pero quiero estar actualizado**

1. Nos actualizamos.
 ```
git pull
 ```

**Trucos:**

- Para cachear las credenciales y evitar que nos pida usuario y contraseña constantemente:

```
git config --global credential.helper 'cache --timeout=9999999'
```
Git cacheará la sesión y no os preguntará el usuario o la password durante 9999999ms (2,7h), o el tiempo que pidamos.
Recuerda que debes incluir este comando antes de tu próximo *git push*


### Resumen
![Trabajar con Git/Github](http://www.geekgumbo.com/wp-content/uploads/2011/08/nvie-git-workflow-commands.png)
[tamaño original](http://www.geekgumbo.com/wp-content/uploads/2011/08/nvie-git-workflow-commands.png)


### Ejercicios

**1 -** Creamos una cuenta en Github y creamos un workespace con referencia a nuestro repositorio de GitHub en [c9.io](https://c9.io/)

**2 -** Sube tu código a GitHub
- Crea una carpeta en el repositorio con tu nombre.
- Una subcarpeta *pública* y otra *privada*
- Crea un archivo *Hello Word* usando [Markdown](https://guides.github.com/features/mastering-markdown/)
- Comparte la tu carpeta *pública* con todos nosotros en GitHub

**2 -** Crea un [Gist](https://gist.github.com/) con el esqueleto de un index.html

**3 -** Presentate en este [issue](https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed2/issues)

### Node.js en Acción

- **[JSDayES golosinas IOT](https://github.com/UlisesGascon/JSDayES-golosinas-IOT)**
 - Orientado a IOT
 - Comunicación Serial
 - Gestión de dispositivos externos
 - No necesita HTTP

- **[Raspi - System Info to Firebase](https://github.com/UlisesGascon/raspberrypi-system-info-data-to-firebase)**
 - Partiendo de otro repositorio/proyecto. 
 - Monitorización del sistema
 - Uso de comandos de terminal
 - Gestión de procesos inestables
 - Integración con soluciones No-backend
 - Tiempo Real
 - No necesita HTTP
 
- **[IT Pulse](https://github.com/UlisesGascon/twitter-sentiments)**
 - Partiendo de otro repositorio/proyecto.
 - APIs de terceros
 - Stream directo de datos
 - Servidor Http
 - Tiempo Real y sincronía con WebSockets
 - Eventos
 - Evaluación semántica de la información
 - Sin Bases de datos

- **[MovieFire](https://github.com/UlisesGascon/Simple-API-REST-with-Firebase-and-IMBD)**
 - Integración con soluciones No-Backend
 - FrontEnd con Jade
 - BackEnd Flexible y dinámico
 - APIRest Cliente -> Servidor
 - BackEnd con Express
 - CORS y Ajax

- **[AireMadrid](https://github.com/UlisesGascon/Aire-Madrid)**
 - Arquitectura alternativa en versiones anteriores
 - Conversión y parseo a Json
 - Procesamiento de datos en bruto
 - APIRest
 - Operaciones cíclicas gestionadas por Pillarsjs
 - FrontEnd con Jade
 - BackEnd con Express
 - Documentación con JSDocs