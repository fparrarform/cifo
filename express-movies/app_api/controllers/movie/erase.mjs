import {movies} from '../models/model.mjs';

const erase = (req,res) =>{
    const eraseIndex = movies.map(movie => movie.id)
    .indexOf(parseInt(req.params.id));

    if(eraseIndex === -1){
        res.sendStatus(404);
    } else {
        movies.splice(eraseIndex,1);
        res.json({message:'movie id '+ req.params.id })
    }

}

export default erase;