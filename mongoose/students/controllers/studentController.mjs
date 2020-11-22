import Router from 'express';
import MongoManager from '../mongo/MongoManager.mjs';
import config from '../config.mjs';
import {Student} from '../model/model.mjs';
import create from './studentCreate.mjs';
import list from './studentList.mjs';
import listByName from './studentListByName.mjs';
import eraseRegister from './studentDelete.mjs';

const mongo = new MongoManager(config);
const router = Router();

mongo.connect();


router.post('/', create(Student));
router.get('/', list(Student));
router.get('/:name', listByName(Student));
router.delete('/:name', eraseRegister(Student));


export default router;