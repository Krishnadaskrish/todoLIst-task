const multer = require ('multer')
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/img/users');
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
    }
  });

  const upload = multer({
    storage: multerStorage,
   
  });
  
  exports.uploadUserPhoto = upload.single('photo');