# Clase 5

### [Google IO 2016](https://events.google.com/io2016/)

![logo](https://mobilenet.cz/obrazek/google-io-2016-224430)

- [Agenda](https://events.google.com/io2016/schedule#agenda)
- [CodeLabs](https://codelabs.developers.google.com/io2016)

### [Nuevo Firebase](https://firebase.google.com/)

![new_logo](http://cdn772.swedroid.se/wp-content/uploads/2016/05/google-firebase-logo-600x308.png)
![funcionalidades](https://lh3.googleusercontent.com/Jp5DG28Mj668TyylbnjcCjNvzh-9-IjxT1IixnKrOziswXJzQZZ8GUpRobmQPba0vvINC8c6GymEni3UYcAX3uLVdHFz0Z_x=s888)


- [Firebase expands to become a unified app platform](https://firebase.googleblog.com/2016/05/firebase-expands-to-become-unified-app-platform.html)

### Heroku

![Heroku_logo](https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png)


- [Lenguajes soportados](https://devcenter.heroku.com/categories/language-support)
- [Soporte](https://help.heroku.com/)
- [Precio](https://www.heroku.com/pricing)
- **Documentacion**
  - [Seguridad](https://devcenter.heroku.com/categories/security)
  - [Command Line](https://devcenter.heroku.com/categories/command-line)
  - [Arquitectura](https://devcenter.heroku.com/categories/heroku-architecture)
  - [Deployment](https://devcenter.heroku.com/categories/deployment)
  - [Features](https://devcenter.heroku.com/categories/features)

### Heroku: Uso

**Instalación del Toolbelt**
- En Linux
```
  wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```
- Versiones ejecutables para Windows y OSX
- Es necesario tener instalado previamente Ruby en la máquina


**Login en Heroku**
```
  heroku login
```

**Preparando la Aplicación**
- Ejemplo de Heroku 
```
  git clone https://github.com/heroku/node-js-getting-started.git && cd node-js-getting-started
```

**Crear un proyecto**
- Con un nombre al azar
```
  heroku create
```
- Con nombre propio
```
  heroku create miproyecto
```

**Desplegando nuestro proyecto**
- Nota: Previamente tienes que tener el proyecto gestionado con Git.
```
  git push heroku master
```

**Escalando nuestro proyecto**
- Verificando el número de Dynos
```
  heroku ps
```
- Definiendo el número de Dynos
```
  heroku ps:scale web=1
```

**Abriendo nuestro proyecto**
```
  heroku open
```

**Logs del proyecto**
```
heroku logs --tail
```

**Lanzar el proyecto en local**
```
heroku local web
```

### Heroku: Addons

- [Documentación General](https://devcenter.heroku.com/categories/add-on-documentation)
- [Lista de Addons](https://elements.heroku.com/addons)
  - [Raygun](https://elements.heroku.com/addons/raygun)
    - Informes de error en tiempo real
    - [Documentación para Node](https://devcenter.heroku.com/articles/raygun#using-with-node)
  - [SendGrid](https://elements.heroku.com/addons/sendgrid)
    - Sistema de envio de emails con muchos extras
    - [Documentación para Node](https://devcenter.heroku.com/articles/sendgrid#node-js)
  - [Easy SMS](https://elements.heroku.com/addons/easysms)
    - Envio/Recepción de SMS mundial
    - [Documentación](https://devcenter.heroku.com/articles/easysms)
  - [mLab MongoDB](https://elements.heroku.com/addons/mongolab)
    - MongoDB as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/mongolab)
  - [GrapheneDB](https://elements.heroku.com/addons/graphenedb)
    - Neo4j Graph as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/graphenedb#using-with-node-js-and-node-neo4j)
  - [ClearDB MySQL](https://elements.heroku.com/addons/cleardb)
    - MySQL
    - [Documentación](https://devcenter.heroku.com/articles/cleardb)
  - [Graph Story](https://elements.heroku.com/addons/graphstory)
    - Enterprise Neo4j Graph Databases as a Service
    - [Documentación](https://devcenter.heroku.com/articles/graphstory)
  - [Heroku Scheduler](https://elements.heroku.com/addons/scheduler)
    - Programador de tareas
    - [Documentación](https://devcenter.heroku.com/articles/scheduler#dyno-hour-costs)
  - [Process Scheduler](https://elements.heroku.com/addons/process-scheduler)
    - Programa el escalamiento de tus *process types* y *dynos* por horas
    - [Documentación](https://devcenter.heroku.com/articles/process-scheduler)
  - [DocRaptor](https://elements.heroku.com/addons/docraptor)
    - Conversor de HTML a PDF. Simple y robusto
    - [Documentación](https://devcenter.heroku.com/articles/docraptor)
  - [Tinfoil Security](https://elements.heroku.com/addons/tinfoilsecurity)
    - Escaner de seguridad
    - [Documentación](https://devcenter.heroku.com/articles/tinfoilsecurity)
  - [Auth0](https://elements.heroku.com/addons/auth0)
    - Gestión de credenciales
    - [Documentación del Addon](https://devcenter.heroku.com/articles/auth0)
    - [Documentación para Node](https://auth0.com/docs/quickstart/webapp/nodejs)
  - [OAuth.io](https://elements.heroku.com/addons/oauthio)
    - Gestión de credenciales. Más de 100 provedores 
    - [Documentación](https://devcenter.heroku.com/articles/oauthio) 
  - [CloudAMQP](https://elements.heroku.com/addons/cloudamqp)
    - RabbitMQ as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/cloudamqp#use-with-node-js)
  - [Keen IO](https://elements.heroku.com/addons/keen)
    - Analíticas para desarrolladores
    - [Documentación para Node](https://devcenter.heroku.com/articles/keen#using-with-node)
  - [Bonsai Elasticsearch](https://elements.heroku.com/addons/bonsai)
    - Elasticsearch
    - [Documentación](https://devcenter.heroku.com/articles/bonsai)


### Otros paquetes

**Paquetes de interes global**

- node-inspector 
  - Instalación global.
  - Utilizar `debugger;` para lanzar las herrameintas de depuración del navegador.
  ```
  node-debug server.js
  ```
- nodemon
  - [Documentación](https://github.com/remy/nodemon#nodemon)
  - Relanza la aplicación por cada cambio que relaizemos
  ```
  npm install -g nodemon
  ```  
  ```
  nodemon server.js
  ```
- forever
  - Relanza la aplicación cuando deja de funcionar
  - Opciones adiccionales
  - Muy popular
  - [Docuemntación](https://github.com/foreverjs/forever)
  ```
    forever start/stop server.js
  ```
- pm2
  - Pensada para producción
  - Muchisimas opciones de configuración
  - Monitorización activa de muchos detalles calve de tu aplicación
  - [Documentación](http://pm2.keymetrics.io/)
  ```
    pm2 start/stop server.js
  ```

**Otros**
- [formidable](https://www.npmjs.com/package/formidable)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [mongose](http://mongoosejs.com/)
  - Driver para trabajr con MongoDB
- [node-mysql](https://github.com/felixge/node-mysql)
  - Facilita el trabajo con MySQL
- [Nodemailer](https://github.com/nodemailer/nodemailer)
  - Gestiona facilemnte el envio de e-mails
- [node-validator](https://github.com/chriso/validator.js)
  - Validación y sanitización de cadenas, especialmente pensado para formularios. 

**[Muchos Más (lista)](https://github.com/sindresorhus/awesome-nodejs/)**