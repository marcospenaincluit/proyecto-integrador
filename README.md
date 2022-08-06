# Entrega del Trabajo Práctico Integrador

Se creó una API para registrar avistajes de aves de la zona.
#### Endpoints:
- GET :: localhost:3000/
Devuelve un array con todos los avistajes guardados en la base de datos.
---
- GET :: localhost:3000/:id
Devuelve el avistaje con el "_id" correspondiente.
---
- POST :: localhost:3000/
	Recibe un JSON con la forma de
```
{
"birdName": "Nombre del ave a registrar", 
"pos":{
		"lat":"Latitud", 
		"lng":"Longitud"},
"notes":"Notas sobre el avistaje", 
"img":"URL a la foto del ave avistada, por defecto usa un placeholder"
"date":"Fecha del avistaje, por defecto toma la fecha actual"
}
```
y lo guarda en la base de datos.

---
- PATCH :: localhost:3000/:id
Recibe un JSON con propiedades del JSON anterior y actualiza esas propiedades en el avistaje del "_id" correspondiente.
---
-DELETE :: localhost:3000/:id
Borra el avistaje con el "_id" correspondiente.

---
---
## Ideas para agregar a la API
- Verificación de nombre utilizando la API de eBird.
- Agregar logger a la base de datos
---
¡Muchas gracias por todo!
_Atte: Santiago Sferco_



# CURSO TÉCNICO \#6: INTEGRADOR

## Premisas:


El práctico Integrador deberá:

1.  El trabajo deberá estar relacionado con Mendiolaza u otro municipio
    de la provincia de Córdoba.

2.  Darles a los participantes una elección libre de la temática:

    a.  Lugares de Gastronomía.

    b.  Puntos interés.

    c.  Paradas de transporte urbano.

3.  El recurso elegido por la temática debe ser geolocalizable.

4.  Se debe incluir un campo a una URL de imagen.

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

