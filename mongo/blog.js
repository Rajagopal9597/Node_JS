const mongoose = require("mongoose");
const faker = require("faker");

async function main(){

    await mongoose.connect('mongodb://localhost/faker');
    console.log("connected successfully");

    const Schema = mongoose.Schema;
  

  const userSchema =  new Schema({
    name : {type: String, required: true},
    email: {type: String, unique: true},
    age: Number,
    minor: Boolean
  })

  const User = mongoose.model('User', userSchema);

  try{

    const user = await User.create({
      name : faker.name.findName(),
      email: faker.internet.email(),
      age: Math.ceil(Math.random() * 100)
    })
    console.log(user);
// Blogs created by user
}
catch(e){
    console.log(e.message);
  }


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => mongoose.disconnect());