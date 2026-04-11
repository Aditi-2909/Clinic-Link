// import multer from 'multer';

// // Set up multer storage configuration
// const storage = multer.diskStorage({
//     filename: function(req,file,callback){
//         callback(null, file.originalname)
//     }
// })

// const upload = multer({storage})

// export default upload;






import multer from 'multer';
import path from 'path';

// storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/'); // folder create kor (important)
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

export default upload;
