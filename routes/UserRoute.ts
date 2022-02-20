import express,{Response} from 'express';
import { CreatePost, GetPost, RegisterUser, Test } from '../controllers';
import { uploadImage } from '../middlewares/ImageUpload';
const router = express.Router();

router.post('/post',CreatePost);
router.get('/post',GetPost);
router.get('/test',Test);
router.post('/register',RegisterUser);

export {router as UserRoute};