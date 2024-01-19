# Backend de Spiky
## Estructura del Proyecto
La estructura del backend de Spiky sigue un diseño organizado para facilitar la mantenibilidad y escalabilidad. A continuación, se describen las principales carpetas y archivos del proyecto:

- index.js: Punto de entrada principal para la aplicación backend.

- src/: Directorio que contiene todo el código fuente de la aplicación.

- controllers/: Controladores que manejan la lógica de negocio de la aplicación.

- linkController.js: Controlador encargado de gestionar las operaciones relacionadas con la manipulación de enlaces, incluyendo la generación de slugs y el almacenamiento en la base de datos.
models/: Modelos de datos que definen la estructura de la base de datos.

- linkModel.js: Modelo de MongoDB que define el esquema para la colección de enlaces, con campos como originalUrl, slug y createdAt.
routes/: Rutas de la aplicación definidas para manejar las solicitudes HTTP.

- linkRoutes.js: Define las rutas relacionadas con la creación y obtención de enlaces en la aplicación, utilizando los métodos HTTP POST y GET.
utils/: Utilidades que contienen funciones reutilizables.

- slugGenerator.js: Genera identificadores únicos (slugs) para las URLs utilizando "nanoid".

- urlValidator.js: Validador de URL que utiliza el módulo URL para verificar la validez de las URLs.
