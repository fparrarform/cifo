import {movies} from '../models/model.mjs';

const read = (req,res) =>{

    const currMovie = movies.filter( movie => {
        if(movie.id == req.params.id)
        return true;
    })

    if( currMovie.length == 1 ){
        res.json(currMovie[0])
    } else {
        res.sendStatus(404);
    }

}

export default read;