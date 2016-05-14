var mensaje = "hola";
process.stdout.write(mensaje);


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
    
    process.exit(0);
    