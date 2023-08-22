import { db } from "../database.js"
import jwt  from "jsonwebtoken";
export const GetPosts = (req,res) => {
    const CategoryPostsQuery = req.query.category ? "select * from posts where category = ? " : "select * from posts ";

    db.query(CategoryPostsQuery,[req.query.category], (err,data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const GetPost = (req, res) => {
    const q =
      "SELECT posts.post_id, `username`, `title`, `description`, posts.image, users.image as uimage, `category`,`postdate` FROM users JOIN posts ON users.user_id  = posts.user_id WHERE posts.post_id = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  }

  export const AddPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const addPost ="INSERT INTO posts(`title`, `description`, `image`, `category`, `postdate`,`user_id`) VALUES (?)";
      const values = [
        req.body.title,
        req.body.description,
        req.body.image.filename,
        req.body.category,
        req.body.date,
        userInfo.id,
      ];
      console.log(values)
      db.query(addPost, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been created.");
      });
    });
  };
  
  export const DeletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(403).json("Token is not valid!");
        }

        const deleteQuery = "DELETE FROM posts WHERE post_id = ? AND user_id = ?";

        db.query(deleteQuery , [req.params.id, userInfo.id], (err, data) => {
            if (err) {
                console.log("Database query error:", err);
                return res.status(403).json("You can delete only your post!");
            }

            return res.json("Post has been deleted!");
        });
    });
};

  
  export const UpdatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      const updateQuery ="UPDATE posts SET `title`=?,`description`=?,`image`=?,`category`=? WHERE `post_id` = ? AND `user_id` = ?";
  
      const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
  
      db.query(updateQuery, [...values, postId, userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been updated.");
      });
    });
  };