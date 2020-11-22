/*Declaracion*/

let     bebida = prompt('qué desea tomar: leche, coca-cola o cerveza?'),
/*let*/ edad = 0,
/*let*/ mensaje = 'Aqui tiene su',
/*let*/ mensajeNegativo = "Lo siento pero no puedo servirle.";


/*Casos*/

if(bebida!='leche') /*Si la bebida NO es leche entonces se debe preguntar la edad*/
    edad = prompt('Me puede decir su edad');

if(bebida === 'cerveza' && edad <18 || (bebida === 'coca-cola"' $$ edad <=14))
    mensaje = mensajeNegativo;

/*otros casos*/

    if(bebida===undefined ||
        bebida==='' ||
        (bebida !== 'leche' && bebida !=='coca-cola' && bebida !=='cerveza') )
        {
            mensaje=mensajeNegativo;
            bebida='';
        }
    

/*Salida*/

alert(mensaje+bebida)

