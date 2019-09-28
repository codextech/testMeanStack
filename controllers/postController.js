
const postService = require('../services/postService');
const response = require('../helpers/global').response;




exports.addPost = async(req, res) => {
    const model = req.body;
    let result;
    try {
        result = await postService.addPostAsync(model)
        if (result.success != true) {
            return res.status(400).json(response(result))
        }
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json(response(result))
};


exports.editPost = async(req, res) => {
    const model = req.body;
    let result;
    try {
        result = await postService.editPostAsync(model)
        if (result.success != true) {
            return res.status(400).json(response(result))
        }
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json(response(result))
};


exports.getPosts = async(req, res) => {
    let result;
    try {
        result = await postService.getAllPostsAsync();
        console.log('result', result);
        
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json(response(result))
};

exports.removePost = async(req, res) => {
    const id = req.query._id;
    let result;
    try {
         await postService.deletePostAsync(id)
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json(response(result))
};


exports.addComment = async(req, res) => {
    const model = req.body;
    let result;
    try {
        result = await postService.addCommnetByPostIdAsync(model)
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json(response(result))
};