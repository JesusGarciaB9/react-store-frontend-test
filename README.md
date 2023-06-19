# ES

# Nombre del Proyecto

Niufi React Shop Frontend

# URLS DEL PROYECTO

1. despliegue en SURGE.SH : [http://niufi-react-shop-v2.surge.sh](http://niufi-react-shop-v2.surge.sh)

2. alternativamente al estar en git, generé un despliegue automático en : [https://react-store-frontend-test.vercel.app/](https://react-store-frontend-test.vercel.app/)

## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- Node.js - (preferiblemente v16.18.0)
- npm (Administrador de paquetes de Node.js)
- yarn (recuerda tener activado el ExecutionPolicy en tu equipo para poder usarlo)

## Instalación

1. Clona este repositorio:
 
git clone https://github.com/JesusGarciaB9/react-store-frontend-test.git

2. Posicionate en la carpeta del repositorio

cd react-store-frontend-test

3. Ejecuta "yarn Install" para instalar todas las dependencias

4. Crea tu .env , actualmente dejé un .env.example en el root del proyecto para guiarse en la creación del .env
este tiene las 3 variables que son las 2 credenciales (pública y privada) que deja wompi en el panel de cuenta al loguearse en la plataforma de comercio y tambien tiene la Url en la cual ejecutarás el proyecto, la de Prod es para despliegues y la de dev es para ejecutar el proyecto en local -- (la REACT_APP_BASE_URL funciona para redirección luego de un pago con wompi )

## EJECUTAR EL PROYECTO EN LOCAL

1. Despues de instalar dependencias y crear las variables de entorno, puedes usar el script "yarn start" para ejecutar el proyecto en modo de desarrollo

2. Recuerda que si vas a utilizar el botón de wompi , debes ingresar REACT_APP_API_WOMPI 

## EJECUTAR TEST UNITARIOS 

1. Para ejecutar los test puedes usar el comando "yarn test", esto ejecutará algunos test creados a nivel de componentes

2. Para ejecutar tambien los test aplicados al manejador de estados (redux) , puedes presionar "a" en la terminal de comandos despues de hacer el paso anterior

3. Los test constan de casos básicos de renderizados con enzyme, react-testing-library y jest, debido a que enzyme está deprecated para las versiones nuevas de react , lo alterné en diferentes casos, adicionalmente esto tambien aplica a los test enfocados al manejador de estados de la aplicación (redux)

## EJECUTAR LA BUILD DEL PROYECTO

1. Para crear una build del proyecto lista para desplegar en surge.sh , se debe ejecutar el comando "yarn build", recuerda que debes tener en tu .env la url a la cual quieres que redirija el proyecto luego de hacer un pago en la pasarela de pago de wompi REACT_APP_BASE_URL

2. Luego ejecutar el comando "cd build"

3. Luego "cp index.html 200.html"

## DESPLEGA EL PROYECTO SURGE

1. Ejecutar el comando npx surge

2. Presiona enter y en la url debes poner la url que definiste en la variable REACT_APP_BASE_URL (esto con el objetivo de que la redirección luego de hacer un pago con wompi se redirija a tu web)

## ESTRUCTURA DEL PROYECTO Y CARPETAS 

1. assets : en esta carpeta van todos los logos y recursos internos que se usan dentro del proyecto

2. componentes : los componentes que se usan dentro de la aplicación ,algunos de los componentes tienen su respectivo archivo .test en su carpeta.

3. fonts : data de las fonts ejecutadas en el proyecto para letras primarias y secundarias, por la magnitud del proyecto no fue necesario una terciaria

4. pages: con un poco de inspiración en next.js, me gusta mucho la estructura de paginas simulando las rutas del navegador, si bien estas se manejan desde el react-router, siento que da una organización fácil y rápida para encontrar las mismas.

4. routes: la configuración de rutas que tiene el proyecto

5. store: la configuración de la store para el manejo de estados, se usa la estructura básica de un proyecto con redux/toolkit, con sus respectivos slices y la combinación de los mismos en el index, se crea una slice para manejar los productos que se ven en la vista y otro para manejar el carrito de compra del usuario.

6. styles: a diferencia de los patrones de diseño estandares en los que se ubica el .scss en la carpeta del componente justo al lado del mismo, yo prefiero tener los estilos centralizados, organizados y manejados por un import que englobe a los mismos.

7. utils: aquí tenemos la db de productos, algunas funciones genericas para testing y para el aplicativo, recordemos que el redux/toolkit está configurado con localstorage, por lo que si ejecutaste el proyecto en desarrollo tendrás cacheados los valores de la db, aunque no tengas data en la misma.

8. el resto de archivos son estandar para el set up del proyecto.

9. si ves que en los estados se usa un take y un skip, fue por que lo pensé como el inicio de una solución con paginación por backend, consideralo como un take y un offset, ya que la db es un archivo se ejecutaron todos los calculos a nivel de array por frontend, en caso normal debería ser por un backend.

# CONTACTO 

Jesús García Barrera - (+57) 3012033171 - jesusgarciab3aa@hotmail.com - agradecería mucho tu feedback!!!
Frase favorita: no olvides la escalabilidad, es importante !!!

# EN

# Project Name

Niufi React Shop Frontend

# PROJECT URLS

1. deployment in SURGE.SH : [](http://niufi-react-shop-v2.surge.sh)

2. alternatively being in git, I generated an automatic deployment in : https://react-store-frontend-test.vercel.app/

## Prerequisites

Make sure you have the following installed:

- Node.js - (preferably v16.18.0)
- npm (Node.js package manager)
- yarn (remember to have ExecutionPolicy enabled on your machine to be able to use it)

## Installation

1. Clone this repository:
 
git clone https://github.com/JesusGarciaB9/react-store-frontend-test.git

2. Place yourself in the repository's folder

cd react-store-frontend-test

3. Run "yarn Install" to install all dependencies.

4. Create your .env , actually I left an .env.example in the root of the project to guide you in the creation of the .env
this has the 3 variables that are the 2 credentials (public and private) that wompi leaves in the account panel when logging into the commerce platform and also has the Url in which you will run the project, the Prod one is for deployments and the dev one is to run the project locally -- (the REACT_APP_BASE_URL works for redirection after a payment with wompi )

## RUN THE PROJECT LOCALLY

1. After installing dependencies and creating environment variables, you can use the "yarn start" script to run the project in development mode.

2. Remember that if you are going to use the wompi button, you have to enter REACT_APP_API_WOMPI 

## RUN UNIT TESTS 

1. To run the tests you can use the "yarn test" command, this will run some tests created at component level.

2. To run also the tests applied to the state handler (redux), you can press "a" in the command terminal after doing the previous step.

3. The tests consist of basic rendering cases with enzyme, react-testing-library and jest, because enzyme is deprecated for the new react versions, I alternated it in different cases, additionally this also applies to the tests focused on the state handler of the application (redux).

## EXECUTE THE PROJECT BUILD

1. To create a build of the project ready to deploy in surge.sh , you must execute the command "yarn build", remember that you must have in your .env the url to which you want to redirect the project after making a payment in wompi's payment gateway REACT_APP_BASE_URL

2. Then execute the command "cd build".

3. Then "cp index.html 200.html"

## DEPLOY THE PROJECT ARISES

1. Execute the command npx surge

2. Press enter and in the url you must put the url that you defined in the variable REACT_APP_BASE_URL (this with the objective that the redirection after making a payment with wompi redirects to your web)

## PROJECT STRUCTURE AND FOLDERS 

1. assets : in this folder are all the logos and internal resources that are used within the project.
 
2. components : the components that are used inside the application, some of the components have their respective .test file in their folder.

3. fonts : data of the fonts executed in the project for primary and secondary letters, for the magnitude of the project was not necessary a tertiary one.

4. pages: with a little inspiration from next.js, I really like the structure of pages simulating the browser routes, although these are managed from the react-router, I feel that it gives an easy and fast organization to find them.

4. routes: the configuration of routes that the project has.

5. store: the configuration of the store for the handling of states, the basic structure of a project with redux/toolkit is used, with their respective slices and the combination of the same ones in the index, a slice is created to handle the products that are seen in the view and another one to handle the user's shopping cart.

6. styles: unlike the standard design patterns in which the .scss is located in the folder of the component right next to it, I prefer to have the styles centralized, organized and managed by an import that includes them.

7. utils: here we have the product db, some generic functions for testing and for the application, remember that the redux/toolkit is configured with localstorage, so if you executed the project in development you will have the values of the db cached, although you do not have data in the same one.

8. the rest of the files are standard for the project set up.

9. if you see that in the states is used a take and a skip, it was because I thought it as the beginning of a solution with pagination by backend, consider it as a take and an offset, since the db is a file all the calculations were executed at array level by frontend, in normal case it should be by a backend.

# CONTACT 

Jesús García Barrera - (+57) 3012033171 - jesusgarciab3aa@hotmail.com - I would really appreciate your feedback!!!!
Favorite phrase: don't forget scalability, it's important !!!!

Translated with www.DeepL.com/Translator (free version)
