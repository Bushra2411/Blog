/*const router = require("express").Router();
const User = require("../models/User");
const bcrypt =require("bcrypt");

//REGISTER
/*router.post("/register",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
         const newUser =new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
         })
         const user=await newUser.save();
         res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});*/

/*router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();

    // Exclude password from response
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

/*router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=router;*/


const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
/*router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});*/

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();

    // Remove password
    const { password, ...others } = user._doc;

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1d" });

    // Return user and token
    res.status(200).json({ user: others, token });
  } catch (err) {
    res.status(500).json(err);
  }
});



// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) return res.status(400).json("Wrong credentials!");

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "your_jwt_secret_key", // in real app, use process.env.JWT_SECRET
      { expiresIn: "1d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, token }); // include token in response
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
