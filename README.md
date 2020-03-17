# contact-agenda
Aplicación para una Agenda de Contactos


# Pruebas locales

Clonar el proyecto https://github.com/MatiasTibaldo/contact-agenda

## Ejecucion con docker-compose
1. Moverse al directorio del proyecto
2. Ejecutar 
  ```docker-compose build```
3. Ejecutar 
  ```docker-compose up ```
4. La aplicacion correrar en el puerto 3000 http://localhost:3000/

## Ejecucion en entorno local
1. Moverse al directorio del proyecto
2. Moverse al frontEnd.
```cd frontend/```
3. Ejecutar 
  ```npm install```
3. Ejecutar 
  ```npm start ```
4. La aplicacion frontend se ejecutara en el puerto 3000 http://localhost:3000/:
5. Luego hay que ejecutar el backEnd
6. En el directorio del proyecto moverse al backEnd: 
```cd backend/api/ ```
7. Ejecutar
```npm install```
8. Ejecutar
```npm start```
9. La aplicacion backend (api) se ejecutara en el puerto 9000 http://localhost:9000/:


# Arquitecura
El frontEnd esta desarrollado en React+javascript
El backEnd esta desarrollado en Node con express 


# Funciones:

## Crear contacto
## Listar contactos
## Editar contactos
## Eliminar contactos
## Listar contactos
## Buscar contactos por nombre, apellido o telefono



