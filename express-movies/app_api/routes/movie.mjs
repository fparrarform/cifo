import Router from 'express';
import create from '../../controllers/movie/create.mjs';
import update from '../../controllers/movie/update.mjs';
import read from '../../controllers/movie/read.mjs';
import erase from '../../controllers/movie/erase.mjs';
const router = Router();



router.post('/', create);


//router.get('/', readAll);
router.get('/:id', read);

router.put('/:id', update);

router.delete('/:id', erase);

export default router;

