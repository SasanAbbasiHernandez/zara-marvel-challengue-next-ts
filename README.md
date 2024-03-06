Proyecto ZARA CHALLENGE MARVEL con Next.js y TypeScript

¡Bienvenido/a!

Este proyecto es una aplicación web desarrollada utilizando Next.js, ya que es la mejor forma de crear una SSR con React.js.

- Descripción:

Este proyecto es una prueba técnica que simula la búsqueda de los míticos personajes de Marvel.

- Funcionalidades:

Buscar Personajes
Añadir a favoritos los personajes
Ver detalle de los personajes

- Requisitos:

Para ejecutar este proyecto localmente, necesitarás tener instalado:

Node.js
Instalación:

Clona este repositorio en tu máquina local utilizando el siguiente comando:

    git clone https://github.com/SasanAbbasiHernandez/zara-marvel-challengue-next-ts.git

Navega a la carpeta del proyecto e instala las dependencias utilizando npm o yarn:

    npm install

- Uso:

Modo Desarrollo:

Una vez que hayas instalado todas las dependencias, puedes ejecutar el proyecto localmente utilizando el siguiente comando:

    npm run dev

Esto iniciará el servidor de desarrollo de Next.js y podrás acceder a la aplicación en tu navegador visitando http://localhost:3000.

Modo Simulación Producción:

    npm run build
    npm run start

Esto iniciará el servidor de Next.js y podrás acceder a la aplicación en tu navegador visitando http://localhost:3000.

- Información RELEVANTE:

Estructura del proyecto: dividido en diferentes carpetas con la finalidad de que el proyecto sea escalable.

Linters y Formatters: Utilizo Prettier para formatear el código con los comandos "npm run format" y "npm run format:fix" y en cuanto a los linters utilizo Eslint propia de Next.js.

Estilos: Se utiliza Sass para los estilos globales en la carpeta src/styles la cual tiene los colores y el responsive parametrizados para que los scss de las vistas y componentes puedan reutilizarlos.

Se utiliza styled-components para la creación de componentes animados que se reutilizan por toda la aplicación.

Interfaces: conjunto de interfaces para la correcta utilización de TypeScript.

Hooks: El primero (UseData) es un hook que nos ayuda a la recolección de datos del Contexto de manera más simple, el segundo (useSearchInputState) ayuda a saber cuándo se ha dejado de escribir en un input y lanzar una acción.

Context: Era obligatorio utilizar Context para la manipulación del estado, por lo tanto creé las funciones y estados pertinentes para la correcta funcionalidad de la aplicación.

Components: Conjunto de componentes para cada una de las vistas y header, además contiene la lista de componentes animados.

Assets: conjunto de assets que se utilizan por la aplicación, se dividen por vistas y componentes.

App: contiene la raíz de la aplicación que muestra a través de los layouts el header y cada una de las vistas, siendo 'characters' la principal y 'character' una vista especial que se autogenera en función del parámetro 'id' de la URL, autogenerando páginas estáticas una vez las visitas por primera vez.

Api: contiene todas las funciones propias de llamada a la API de Marvel.

- Palabras finales:

La verdad es que me he divertido mucho haciendo este proyecto, le he dedicado muchas horas y me gustaría recibir feedback del mismo, sobre todo lo negativo.

Un saludo,
Sasan.