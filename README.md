# Marvel Superheroes App

Aplicación que consume la API de Marvel y permite visualizar una lista de superhéroes y los detalles de cada uno.

## Requisitos

Antes de comenzar, se debe tener instalados los siguientes programas y se debe contar con una API Key de Marvel:

[![Node.js](https://img.shields.io/badge/Node.js-v22.14.0-brightgreen)](https://nodejs.org/)
[![Ionic CLI](https://img.shields.io/badge/Ionic%20CLI-v7.2.0-blue)](https://ionicframework.com/docs/cli)
[![Angular CLI](https://img.shields.io/badge/Angular%20CLI-v19.1.8-d5002b)](https://angular.dev/installation)
[![Android Studio](https://img.shields.io/badge/Android%20Studio-2024.2.2-blueviolet)](https://developer.android.com/studio)
[![Git](https://img.shields.io/badge/Git-v2.48.1-f15a29)](https://git-scm.com/)
[![APIKEY MARVEL](https://img.shields.io/badge/APIKEY%20MARVEL-Obtenla%20aqui-orange)](https://developer.marvel.com/account)

## Instalación

1. Clonar el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/matigaleanodev/marvel-supereoes
   cd marvel-supereoes
   ```

2. Instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno. Abrir los siguientes archivos y agrega las propiedades con las keys correspondientes:

   - **src/environments/environment.ts y/o src/environments/environment.prod.ts**:

     ```typescript
     export const environment = {
       production: true,
       MARVEL_PUBLIC_KEY: "AQUI VA LA KEY PUBLICA DE MARVEL",
       MARVEL_PRIVATE_KEY: "AQUI VA LA KEY PRIVADA DE MARVEL",
       MARVEL_API: "https://gateway.marvel.com/v1/public",
     };
     ```

4. Ejecutar la app en entorno local:

   ```bash
   ionic serve
   ```

## Despliegue en Android Studio

Para ejecutar la app en un dispositivo Android, sigue estos pasos:

1. Abrir el proyecto con Android Studio:

   ```bash
   ionic build
   ionic cap add android
   ionic cap open android
   ```

2. En Android Studio, espera a que se sincronicen todos los archivos del proyecto. Una vez sincronizado, selecciona un dispositivo o un emulador y haz clic en **Run** (el botón verde).

## Funcionalidad

- **Pantalla de Listado**: Muestra el nombre y la miniatura de los superhéroes de Marvel.
- **Pantalla de Detalle**: Muestra información detallada de cada superhéroe, incluyendo su nombre, imagen, cantidad de cómics, series y historias.

## Soporte de Idiomas

La app está disponible en **inglés** y **español** tomando el idioma del dispositivo.
