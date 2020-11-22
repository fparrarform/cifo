import {movies} from '../models/model.mjs';

const create = (req, res) =>{
     console.log(JSON.stringify(req.body));
    if(!req.body.name || !req.body.year.toString().match(/^[0-9]{4}$/g)||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
           res.sendStatus(400);
       } else {
           let newId = movies[movies.length-1].id+1;

           movies.push({
               id:newId,
               name: req.body.name,
               year: req.body.year,
               rating: req.body.rating
           });

           res.json({message: "New movie created",
                     location: "/movies/"+newId     });

       }


}

export default create;