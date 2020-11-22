import express from 'express';
import movies from './app_api/routes/movie.mjs';

const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/movies', movies);
/* app.use('/productos',productos);
app.use('/carrito',carrito);
app.use('/admin',admin); */


app.listen(3000, _=> console.log('listening on 3000'));

