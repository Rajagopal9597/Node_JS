const mongoose = require('mongoose');
const faker = require("faker");

async function main() {
  // Use connect method to connect to the server

  await mongoose.connect('mongodb+srv://admin:admin@cluster0.r2xb2tj.mongodb.net/?retryWrites=true&w=majority');
  console.log('Connected successfully to server');

  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const userSchema =  new Schema({
    name : {type: String, required: true},
    email: {type: String, unique: true},
    age: Number,
    minor: Boolean
  })

  const User = mongoose.model('User', userSchema);

  const blogSchema =  new Schema({
    title: {type: String, required : true, unique: true},
    posts: {type: String, required : true},
    user: {type: ObjectId, ref: "User"}
  })

  const Blog = mongoose.model('Blog', blogSchema);

  try{

    const user = await User.create({
      name : faker.name.findName(),
      email: faker.internet.email(),
      age: Math.ceil(Math.random() * 100)
    })
// Blogs created by user
    for(let i = 0; i < 5; i++){
      await Blog.create({
        title: faker.lorem.word(),
        posts: faker.lorem.paragraph(),
        user: user._id
      })
    }

    const blogs = await Blog.find().populate("user");
    console.log(blogs);
  
  }catch(e){
    console.log(e.message);
  }


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => mongoose.disconnect());