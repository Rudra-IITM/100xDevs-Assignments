const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { jwt_secret } = require("../config");
const jwt = require("jsonwebtoken");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        message: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValid = await User.find({
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
            msg: 'User not found'
        })
    }  
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const decoded = await jwt.decode(req.headers.authorization.split(" ")[1]);
    const username = decoded.username;
    const courseId = req.params.courseId;
    await User.updateOne({
        username
    },{
        "$push": {
            purchasedCourse: courseId
        }
    })
    res.json({
        message: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const decoded = await jwt.decode(req.headers.authorization.split(" ")[1]);
    const username = decoded.username;
    console.log(username);
    const user = await User.find({
        username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourse
        }
    })
    res.json({
        courses
    })
});

module.exports = router