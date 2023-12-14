import postService from './postService.js';
import Post from './schemas/Post.js';

class PostController {
  async create(req, res) {
    try {
      //send getted data to the db
      const post = await postService.create(req.body);
      //sen data to the server
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      //get all posts from db
      const posts = await postService.getAll();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOne(req, res) {
    try {
      //get id parametr from url
      const { id } = req.params;
      const posts = await postService.getOne(id);
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await postService.update(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
      console.log(req.params.id);
      const post = await postService.delete(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new PostController();
