# LUGARES PARA HACER TREKKING EN CÓRDOBA

## Descripción
A travez de esta API agregar, obtener, modificar y eliminar informacion. Los datos aqui presentados son lo escencial y basico que una persona aficionada al trekking requiere para ir a un lugar. 

Entontraremos informacion sobre
    * Nombre del lugar./n
    * Localidad de Córdoba donde se escuentra. /n
    * Distancia a recorrer, aclaro que puede variar segun el sendero a escojer (muchos lugares poseen diferentes caminos que llevan al mismo lugar, segun eso puede variar la distancia y la dificultad del trayecto). /n
    * La dificultad del trayecto. /n
    * Si se necesita un guia para ir. En muchos casos no son necesario, pero siempre es recomendable cuando uno no conoce. /n
    * Si posee algun tipo de costo el ingreso (no se considera costos de un guia)./n
    * El tipo de lugar del que se trata. Podemos encontrar cerros, miradores, monumentos, parques nacionales, etc /n
    * Un link a una imagen de referencia /n
    * Un enlace de descarga de un archivo .gpx . Sirve para que su pueda descargar el archivo en diferentes aparatos ( celular, relojes, GPS portatiles entre otros). Gracias a este archivo podremos descargar el recorrido y asi guiarnos por todo el camino. /n

##  Metodos para realizar las Request

### GET (Obtener Datos)

* Consultar todos
    http://localhost:3000/


* Consultar uno segun ID
    http://localhost:3000/id/:id

    ejemplo: http://localhost:3000/id/62e5c729aa605f13810eb6db


* Consulas filtrando segun query
    http://localhost:3000/filter

    Las query pueden ser segun:
        * nombre
        * localidad
        * dificultad
    
    ejemplos:
        1) http://localhost:3000/filter?nombre=El%20Mastil
        2) http://localhost:3000/filter?localidad=Altas%20Cumbres
        3) http://localhost:3000/filter?dificultad=moderada

### POST (Agregar datos)

 http://localhost:3000/

    ejemplo del Json Body
        {
            "nombre": "Champaqui",
            "localidad": "Altas Cumbres",
            "distanciaKm": 47,
            "coordenadas": {
                "Altitud": -31.987470073785627, 
                "Longitud": -64.93675228199244
            },
            "necesitaGuia": true,
            "tieneCosto": true,
            "tipo": "Cerro",
            "imagen": "https://chuncania.com/wp-content/uploads/2020/07/cerro-champaqui-traslasierra-cordoba.jpg",
            "dificultad": "alta",
            "tramo": "https://drive.google.com/file/d/136kjLiSvoZHJEkslQecMs7uaqZlBEcDA/view?usp=sharing"
        }

### DELETE (Eliminar datos)

 http://localhost:3000/:id

Se debe pasar como parametro en la URL, el ID del elemento a borrar

Ejemplo:  http://localhost:3000/62e5c8c5aa605f13810eb6de


### PATCH (Modificar Datos)

http://localhost:3000/:id

Se debe pasar como parametro en la URL, el ID del elemento a modificar, y un JSon en el body con los datos que se quieren modificar

ejemplo si desea modificar solo la dificultad del trekking:

http://localhost:3000/62e5c729aa605f13810eb6db

ejemplo del Json Body
    {
        "distanciaKm": 7,
        "dificultad": "baja"
    }
