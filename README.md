# CURSO TÉCNICO: NODE.JS

## Premisas:


El práctico Integrador deberá:

1.  El trabajo deberá estar relacionado con Mendiolaza u otro municipio
    de la provincia de Córdoba.

2.  Darles a los participantes una elección libre de la temática:

    a.  Lugares de Gastronomía.

    b.  Puntos interés.

    c.  Paradas de transporte urbano.

3.  El recurso elegido por la temática debe ser geolocalizable.

4.  Se debe incluir un campo a una URL de imagen. Por ejemplo: `https://i.imgur.com/jLfg3iO.png`

## Actividades:

### Node.js - Especificaciones 
---------------------------------------------

Se solicita un backend hecho en Node.js y Express.js.

Se debe respetar la estructura de los proyectos vistos en el curso.


### Actividad \#1: 
Inicializar proyecto tanto de express como en github,
definir scripts en package.json, definir rutas y config de conexión a BD
Mongodb. Configurar .gitignore, credenciales sensibles en .env.

### Actividad \#2: 
Programación de los endpoints para un CRUD de un recurso.

-   GET :: /resource \-\--\> Trae un array con todos los resources.

-   GET :: /resource/:id \-\--\> Trae el resource con la id
    especificada.

-   POST :: /resource \-\--\> Crea un solo resource a la base de datos.
    Recibe datos por body.

-   DELETE :: /resource/:id \-\--\> Borra un elemento de la base de
    datos.

-   PATCH :: /resource/:id \-\--\> Edita un resource con los datos
    enviados en body.

## Variables de entorno, secretos, dotenv
Enviar el archivo .env con las credenciales de acceso a MongoDB **SOLO POR CORREO**
**NO SUBIR A GITHUB**

Hacer whitelist a todas las IPs en Mongo Atlas hasta que se haga la corrección. Una vez recibida la devolución, dar de baja el whitelist.
## Entrega
La entrega debe ser enviando un correo con el link del Repositorio del proyecto ó el link a la pull request (si es que hicieron un Fork).

Enviar a marcos.pena@incluit.com

CC: Jonathan Brizio <jonathan.brizio@incluit.com>

CC: trainings@incluit.com


