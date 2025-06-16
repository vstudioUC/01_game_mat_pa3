# Juego Matemático Interactivo para  Producto Académico 3 - Tipo Cuestionario de Matemática

Este es un recurso educativo interactivo desarrollado con HTML, CSS, JavaScript en el lado Frontend y Node.js + Express en el lado Backend. El objetivo es ofrecer un cuestionario de matemáticas donde el usuario debe responder correctamente las preguntas de tipo objetivo, para luego avanzar a la siguiente pregunta.

## Estructura del Proyecto

01_game_mat_pa3/
├── backend/
│   	├── node_modules/
│   	├── package.json
│   	├── package-lock.json
│   	└── server.js
├── frontend/
│   	├── css/
│   	│   	└── styles.css
│   	├── js/
│   	│   	└── script.js
│   	└── index.html

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Render (para despliegue)

## Cómo ejecutar localmente

1. Clonacion en el repositorio:
   git clone https://github.com/TU_USUARIO/01_game_mat_pa3.git

2. Entrar a la carpeta del backend:
   cd 01_game_mat_pa3/backend

3. Instala las dependencias:
   npm install

4. Ejecutar el servidor:
   node server.js

5. Abrir el navegador en:
   http://localhost:3000 o también ejecutando el archivo directamente index.html

## Despliegue en Render

1. Se creo una cuenta en https://render.com con el correo institucional
2. Conectar esa cuenta con GitHub
3. Una ves dentro de Render se creo un nuevo Web Service:
   - Root Directory: backend
   - Build Command: npm install
   - Start Command: node server.js
4. Render detecta automáticamente el puerto desde process.env.port

## Información del motivo del desarrollo

Este proyecto fue desarrollado porque en mi unidad didáctica 3 implicaba realizar este juego interactivo como parte de asignatura de Matemática Básica relacionados con los siguientes temas:

- Unidad 1 Sistemas de números reales

  -	Números reales, propiedades

  -	Operaciones con números enteros y modelado
  -	Números racionales, fracciones, decimales y modelado
  -	Porcentaje con aplicaciones
  -	Regla de tres, aplicaciones

- Unidad 2 Expresiones Algebraicas

  -	Términos semejantes y polinomios
  -	Productos notables
  -	Factorización
  -	Teoría de exponentes
  -	Operaciones con fracciones algebraicas y fracciones parciales
  -	Radicación algebraica y racionalización

- Unidad 3 Ecuaciones e inecuaciones

  -	Ecuaciones lineales y cuadráticas
  -	Ecuaciones fraccionarias e irracionales
  -	Inecuaciones lineales, cuadráticas, de grado superior e inecuaciones racionales
  -	Ecuaciones con valor absoluto
  -	Inecuaciones con valor absoluto

## Contacto

- Desarrollado por 45434080@continental.edu.pe

- ### movil: 927443778
