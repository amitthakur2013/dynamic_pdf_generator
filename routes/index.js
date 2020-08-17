const express = require('express');
const router = express.Router();
const pdf = require('html-pdf');
const multer=require('multer')
const path = require('path');
const pdfTemplate =require('../documents');

const storage = multer.diskStorage({
	destination: function(req,file,cb) {
		cb(null, 'uploads/');
	},
	filename:function(req,file,cb) {
		//Date.now()+file.originalname
		cb(null,"demo");
	}
});

const fileFilter =(req,file,cb) => {
	if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png'){
		cb(null,true);
	} else {
		cb(null,false);
	}
}

const upload = multer({
	storage,
	fileFilter
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/generatePdf',upload.single('image'), async (req, res,next) => {
	
	if(req.file){
		req.body.imgData=path.join(__dirname,'../',req.file.path)
	}

    await pdf.create(pdfTemplate(req.body), config = {
		  "height": "311mm",     
		  "width": "210mm",            

  }).toFile(`${__dirname}/result.pdf`, (err) => {
        if(err) {
            next(err);
        }
        console.log('Created!!');
        res.redirect('/');
    });
    
});

router.get('/fetch-pdf', (req, res, next) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

module.exports = router;
