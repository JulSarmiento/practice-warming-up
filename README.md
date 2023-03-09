# practice-warming-up

Crea una API RESTful que permita realizar operaciones CRUD (Create, Read, Update, Delete) sobre una entidad llamada "productos". Esta entidad debe tener los siguientes campos:

- id: un identificador único para cada producto.
- nombre: el nombre del producto.
- descripcion: una breve descripción del producto.
- precio: el precio del producto.

La API debe tener los siguientes endpoints:

- GET /productos: devuelve una lista de todos los productos.
- GET /productos/:id: devuelve los detalles de un producto específico.
- POST /productos: crea un nuevo producto.
- PUT /productos/:id: actualiza los detalles de un producto específico.
- DELETE /productos/:id: elimina un producto específico.

Para implementar este challenge, puedes utilizar Node.js, Express y ECMAScript. Puedes almacenar los productos en un archivo JSON o en una base de datos (como MongoDB). Además, te recomiendo utilizar el módulo "body-parser" de Express para parsear el cuerpo de las solicitudes HTTP y poder trabajar con los datos enviados en formato JSON.

Para implementar este challenge de forma moderna, utilizaremos las siguientes dependencias:

- express: un framework minimalista y flexible para crear aplicaciones web y APIs con Node.js.
- mongoose: una biblioteca ODM (Object Document Mapper) que facilita la interacción con bases de datos MongoDB y permite definir modelos de datos.
- dotenv: una biblioteca para cargar variables de entorno desde un archivo .env, que te permitirá ocultar información sensible (como claves de API o credenciales de bases de datos) de tu código fuente.
- morgan: un middleware que registra las solicitudes HTTP en la consola, lo que te permitirá depurar tu aplicación.
- jest: Es un framework de pruebas desarrollado por Facebook que se utiliza para probar aplicaciones basadas en JavaScript. 

Emplearemos un patro de diseño MVC con el siguiente manejo de carpetas: 

  ├── src/
  │   ├── config/
  │   │   ├── routes.js
  │   │   └── ...
  │   ├── controllers/
  │   │   ├── challengeController.js
  │   │   └── ...
  │   ├── models/
  │   │   ├── Challenge.js
  │   │   └── ...
  │   ├── services/
  │   │   ├── challengeService.js
  │   │   └── ...
  │   ├── utils/
  │   │   ├── helpers.js
  │   │   └── ...
  │   └── app.js
  ├── test/
  │   ├── challenge.test.js
  │   └── ...
  ├── node_modules/
  ├── package.json
  └── README.md

- src/ contiene todo el código fuente de la aplicación.
- config/ contiene la configuración de la aplicación, como las rutas y otras variables de entorno.
- controllers/ contiene los controladores de la aplicación, que se encargan de procesar las solicitudes HTTP y llamar a los servicios correspondientes.
- models/ contiene los modelos de datos de la aplicación, que se utilizan para interactuar con la base de datos o con otros sistemas de almacenamiento de datos.
- services/ contiene los servicios de la aplicación, que encapsulan la lógica de negocio de la aplicación y se utilizan para realizar tareas específicas.
- utils/ contiene utilidades y funciones de ayuda que se utilizan en diferentes partes de la aplicación.
- app.js es el archivo principal de la aplicación, que inicializa el servidor y carga la configuración y los controladores correspondientes.
- test/ contiene los archivos de prueba de la aplicación, que se utilizan para probar diferentes funcionalidades de la aplicación.
- node_modules/ contiene las dependencias de la aplicación.
- package.json contiene la información sobre la aplicación, las dependencias y los scripts disponibles.
- README.md es un archivo de documentación que explica cómo usar y ejecutar la aplicación.

