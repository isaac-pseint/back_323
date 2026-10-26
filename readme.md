## paso a paso
- inicializar el proyecto : npm init
- crea el package json
- cambiamos esta linea :   "type": "module", para poder implementar de ES6
- paquetes basicos : npm i nodemon cors express mysql2
    - nodemon : solo para desarrollar! sirve para cambiar el code y que se actualice autom
    -cors : setear la seguridad de interactuar con direcciones ip diferentes
    -express : libreria para crear un server rest (post, put, gest , delete)
    -mysql2 : libreria que permite hacer consultas sql desde NODEJS

-cambiamos la sesion scriot en package :
"dev": "nodemon index.js",
"start": " node index.js",
 con el fin de tener 2 scripts de ejecucion, uno de desarrollo 
 y uno de produccion(despliege)