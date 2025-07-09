/*const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // Example: 1716323917381.jpg
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//CREATE POST
router.post("/", upload.single("photo"), async (req, res) => {
  console.log("Request body:", req.body);  // Add this line to debug
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found");

    if (post.username === req.body.username) {
      try {
        await post.deleteOne();  // <-- Correct method here
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;*/

/*const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const multer = require("multer");
const path = require("path");

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });


// ============================
// CREATE POST (File or URL)
// ============================
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const postData = req.body;

    // If user uploads an image file, set the filename
    if (req.file) {
      postData.photo = req.file.filename;
    }

    const newPost = new Post(postData);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.error("Failed to create post:", err);
    res.status(500).json(err);
  }
});


// ============================
// UPDATE POST
// ============================
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } else {
      res.status(401).json("You can update only your own post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// ============================
// DELETE POST
// ============================
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found");

    if (post.username === req.body.username) {
      await post.deleteOne();
      res.status(200).json("Post has been deleted...");
    } else {
      res.status(401).json("You can delete only your own post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// ============================
// GET SINGLE POST
// ============================
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ============================
// GET ALL POSTS
// ============================
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});


// PUT /api/posts/like/:id
router.put("/like/:id", async (req, res) => {
  const { username } = req.body;

  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(username)) {
      post.likes.push(username); // Like
    } else {
      post.likes = post.likes.filter((user) => user !== username); // Unlike
    }

    await post.save();
    res.status(200).json({ likes: post.likes });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;*/

const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const multer = require("multer");
const path = require("path");

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });


// ============================
// CREATE POST (File or URL)
// ============================
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const postData = req.body;

    // If user uploads an image file, set the filename
    if (req.file) {
      postData.photo = req.file.filename;
    }

    const newPost = new Post(postData);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.error("Failed to create post:", err);
    res.status(500).json(err);
  }
});


// ============================
// UPDATE POST
// ============================
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } else {
      res.status(401).json("You can update only your own post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// ============================
// DELETE POST
// ============================
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found");

    if (post.username === req.body.username) {
      await post.deleteOne();
      res.status(200).json("Post has been deleted...");
    } else {
      res.status(401).json("You can delete only your own post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// ============================
// GET SINGLE POST
// ============================
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ============================
// GET ALL POSTS
// ============================
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT /api/posts/like/:id
router.put("/like/:id", async (req, res) => {
  const { username } = req.body;

  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(username)) {
      post.likes.push(username); // Like
    } else {
      post.likes = post.likes.filter((user) => user !== username); // Unlike
    }

    await post.save();
    res.status(200).json({ likes: post.likes });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

