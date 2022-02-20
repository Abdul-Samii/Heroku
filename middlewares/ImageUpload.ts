import express from 'express';
import multer from 'multer';

const router = express.Router();
const baseURL = String.raw`D:\Qatar Project\Backend\images\'`

const imageStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images')
    },
    filename:function(req,file,cb){
        cb(null,baseURL+Date.now()+"_"+file.originalname)
    }
})

export const uploadImage = multer({storage:imageStorage}).array('images',10);
