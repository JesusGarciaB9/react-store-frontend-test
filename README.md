# Nombre del Proyecto

Niufi React Shop Frontend

# URLS DEL PROYECTO

1. despliegue en SURGE.SH : http://niufi-react-shop-v2.surge.sh

2. alternativamente al estar en git, generé un despliegue automático en : https://react-store-frontend-test.vercel.app/

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