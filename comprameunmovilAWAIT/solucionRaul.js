const dejameQueLoPiense=()=>{
   return new Promise(resolve=>{
       setTimeout(()=>{
           resolve(Math.random()>=0.5)
       }, 1000);
   })
}
const teLoCompro = async ()=>{
   try{
       let respuesta=await dejameQueLoPiense();
       let movil={};
       if (respuesta){
           movil={marca:'fairphone', modelo:'3'};
           return {ok: true, movil}
       } else {
           let error = new Error('no hay movil');
           return {ok: false, error}
       }
   } catch (error){
       console.log(error.message);
   }
}
const quieroUnMovil = async ()=>{
   let resultado = await teLoCompro();
   if (resultado.ok){
       console.log(me han comprado un ${resultado.movil.marca})
   } else{
       console.error(resultado.error.message);
   }
}
quieroUnMovil().catch(e=>console.log('ha ocurrido el siguiente error: ' + e.message));