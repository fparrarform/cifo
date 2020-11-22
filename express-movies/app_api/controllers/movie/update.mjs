import {movies} from '../models/model.mjs';

const update = (req, res) =>{

    if(!req.body.name || !req.body.year.toString().match(/^[0-9]{4}$/g)||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)||
       !req.params.id.toString().match(/^[0-9]{3,}$/g)){
           res.sendStatus(400);
       } else {

    const updateIndex = movies.map(movie => movie.id)
                              .indexOf(parseInt(req.params.id));

        if(updateIndex === -1){

/*            movies.push({
               id:req.params.id,
               name: req.body.name,
               year: req.body.year,
               rating: req.body.rating
            });
               
               res.json({message: "New movie created",
                     location: "/movies/"+req.params.id     });
 */                    } else {
                        movies[updateIndex] = {
                            id:req.params.id,
                            name: req.body.name,
                            year: req.body.year,
                            rating: req.body.rating
                        }
                        res.json({message: "Movie Id" + req.params.id + "updated",
                        location: "/movies/"+req.params.id     });
                    }
       }


}

export default update;