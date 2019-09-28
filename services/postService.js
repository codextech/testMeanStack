
const Post = require('../models/post');
const response = require('../helpers/global').response;


exports.addPostAsync = async(model) => {

    let postId;
    try {
        postId =  await Post.create(model);
        if (!postId) {
        return response(false, "post could't added", null);      
        }
    } catch (error) {
        console.log(error);
    }
    return response(true, "post added", postId);

}


exports.editPostAsync = async(model) => {
    try {
       
        console.log(model);
        
       await Post.update(
            {_id: model._id}, //query
            { $set : {title: model.title, description: model.description}});
    } catch (error) {
        console.log(error);
    }
    return response(true, "post edited", null);

}

exports.getAllPostsAsync = async() => {

    let posts;
    try {
        posts =  await Post.find({});
    } catch (error) {
        console.log(error);
    }
    return response(true, "posts", posts);

}

exports.deletePostAsync = async(id) => {

    try {
          await Post.deleteOne({_id: id});
    } catch (error) {
        console.log(error);
    }
    return response(true, "post deleted", null);
}


exports.addCommnetByPostIdAsync = async(model) => {

    try {
        console.log(model);
        
      await  Post.updateOne(
            { _id: model._id},
            { $push: 
                { comments:  {
                        content: model.content
                    }
                }
            });
    } catch (error) {
        console.log(error);
    }
    return response(true, "comment added",null);

}