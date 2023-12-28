const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    await Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValid = await Admin.find({
        username,
        password
    });
    if (isValid) {
        const token = jwt.sign({
            username}
            , jwt_secret);
        res.json({
            token
        });
    } else {
        res.json({
            msg: 'Admin not found'
        })
    }   
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const token = req.headers.authorization.split(" ")[0];
    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        imageLink: req.body.imageLink,
        price: req.body.price
    })
    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    });
});

module.exports = router;