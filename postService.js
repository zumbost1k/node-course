import fileService from './fileService.js';
import Post from './schemas/Post.js';

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    //send getted data to the db
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }
  async getAll() {
    //get all posts from db
    const posts = await Post.find();
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error('post bu current id not found');
    }
    //get post by id
    const post = await Post.findById(id);
    return post;
  }
  async update(post) {
    if (!post._id) {
      throw new Error('post bu current id not found');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }
  async delete(id) {
    if (!id) {
      throw new Error('post by current id not found');
    }
    console.log(id);
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
