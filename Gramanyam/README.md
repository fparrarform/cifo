## Bienvenid@s a Gramanyam!
![Nyam!](https://cdn.pixabay.com/photo/2015/08/19/02/27/restaurant-895428_960_720.png)

***Gramanyam*** es un proyecto que nace con la misión de:

 - Poner en contacto a consumidores y restaurantes de la localidad de
   Santa Coloma de Gramanet, mediante un **directorio de busqueda**.
   
 - Promover y dinamizar la restauración local mediante un servicio gratuito de **central de reservas**.

   
 - Posibilitar el acceso al ecommerce  a los restaurantes de Santa Coloma de gramanet o aumentar su visibilidad, mediante una **plataforma de pedidos online**.  

Actualmente ya existen distintas plataformas que cubren uno u otro servicio, pero todas actuan de forma global; sin tener en cuenta las particularidades de cada localidad. Ni, por lo tanto, de las de los usuarios consumidores o de los restaurantes. 

También, por su afán de escala y expansión, imponen condiciones abusivas hacia los restaurantes y su relación es de tendencia dominante. 

La visión de ***Gramanyam*** es que TODOS los usuarios del marketPlace ganen por igual, sin menospreciar a ningún eslabon de la cadena. Las comisiones que plantea Gramanyam, son las mínimas para subsistir y permitir adaptarse, día a día, a la realidad y las circunstancias de la localidad, con tal de seguir mejorando. 

## Este proyecto ha sido desarrollado mediante:

    Framework Angular versión Angular CLI: 8.0.6
    Node: 10.15.3
    OS: win32 x64
    Angular: 8.0.3
    
    ... animations, common, compiler, compiler-cli, core, forms
    ... language-service, platform-browser, platform-browser-dynamic
    ... router

## Deployment

Ruta de acceso a aplicación: 

> https://fparrar.github.io/Gramanyam/

Ruta de acceso a API-server-auth: 

> https://api-pacote.herokuapp.com/



Package                           Version
-----------------------------------------------------------

    @angular-devkit/architect         0.800.6
    @angular-devkit/build-angular     0.800.6
    @angular-devkit/build-optimizer   0.800.6
    @angular-devkit/build-webpack     0.800.6
    @angular-devkit/core              8.0.6
    @angular-devkit/schematics        8.0.6
    @angular/cli                      8.0.6
    @ngtools/webpack                  8.0.6
    @schematics/angular               8.0.6
    @schematics/update                0.800.6
    rxjs                              6.4.0
    typescript                        3.4.5
    webpack                           4.30.0


Con las siguientes dependencias: 

     "dependencies": {
        "@angular/animations": "~8.0.3",
        "@angular/common": "~8.0.3",
        "@angular/compiler": "~8.0.3",
        "@angular/core": "~8.0.3",
        "@angular/forms": "~8.0.3",
        "@angular/platform-browser": "~8.0.3",
        "@angular/platform-browser-dynamic": "~8.0.3",
        "@angular/router": "~8.0.3",
        "bootstrap": "^4.3.1",
        "jquery": "^3.4.1",
        "json-server": "^0.15.0",
        "json-server-auth": "^1.2.1",
        "rxjs": "~6.4.0",
        "tslib": "^1.9.0",
        "zone.js": "~0.9.1"
      },
      "devDependencies": {
        "@angular-devkit/build-angular": "~0.800.6",
        "@angular/cli": "~8.0.6",
        "@angular/compiler-cli": "~8.0.3",
        "@angular/language-service": "~8.0.3",
        "@types/node": "~8.9.4",
        "@types/jasmine": "~3.3.8",
        "@types/jasminewd2": "~2.0.3",
        "codelyzer": "^5.0.0",
        "jasmine-core": "~3.4.0",
        "jasmine-spec-reporter": "~4.2.1",
        "karma": "~4.1.0",
        "karma-chrome-launcher": "~2.2.0",
        "karma-coverage-istanbul-reporter": "~2.0.1",
        "karma-jasmine": "~2.0.1",
        "karma-jasmine-html-reporter": "^1.4.0",
        "protractor": "~5.4.0",
        "ts-node": "~7.0.0",
        "tslint": "~5.15.0",
        "typescript": "~3.4.3"
      }
    }

## Futuras actualizaciones y contribuciones

 - En próximas versiones los formularios serán reactivos.

 - Pendiente Validación de datos:
	 - Actualmente la validación ser realiza capturando el error del objeto
	   que devuelve la API json-server (ya tiene su propia validación,
	   aunque es bastante sencilla).  En futuras versiones añadiremos más
	   validaciones con FormControls (validators).

 - Boton Search no está implementada.

 - Los restaurantes no tienen fotografías propias. Son las mismas para todos ellos. Las fotografías se recogen de lorempixel.com/food.
	 - El próximo paso, consistirá en mandar    las fotos al servidor NODE
	   en binario para poder asociarlas al    <restaurant.id> y mostrarlas
	   cuando sea necesario.

 - La función editRestaurant ha sido implementada en esta version.
	 -  Se ha protegido la ruta con 'guard' y sólo se puede editar si se está logueado (ahora se puede editar cualquier restaurante siempre que se esté logueado).
No obstante, en futuras versiones, la función no aparecerá por defecto, sólo aparecerá cuando se esté logueado. Y el 'guard' se encargará de permitir su edición siempre que la ficha y el usuario (logueado) del propietario de la ficha coincidan.

 - El user-story se ha centrado inicialmente más en el restaurante.
	 - Por ello los componentes del modulo user no han sido trabajados.
	 - También se añadirán funcionalidades al component editRestaurant.

## DIAGRAMA Y WARFRAME

**DIAGRAMA ESTRUCTURA PROYECTO**

![DIAGRAMA](https://raw.githubusercontent.com/fparrar/Gramanyam/master/docsPresentacion/descarga%20%281%29.png)

**HOME**
![enter image description here](https://github.com/fparrar/Gramanyam/blob/master/docsPresentacion/Page_1.png?raw=true)

**LOGIN**

![login](https://github.com/fparrar/Gramanyam/blob/master/docsPresentacion/Page_2.png?raw=true)

**REGISTER USER**

![register user](https://github.com/fparrar/Gramanyam/blob/master/docsPresentacion/Page_3.png?raw=true)

**REGISTER RESTAURANT**

![register restaurant](https://github.com/fparrar/Gramanyam/blob/master/docsPresentacion/Page_4.png?raw=true)


##COMMITS

Tenemos 31 commits a lo largo de 5 dias. 

![commits](https://github.com/fparrar/Gramanyam/blob/master/docsPresentacion/commits.png?raw=true)