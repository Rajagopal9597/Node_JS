const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName) 
	.then(function(result){
       console.log(" "+ result)
	}).catch(function(error){
		console.log(error)
	})
    

}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName);
}
//("write.txt","hello")
//myFileReader("write.txt");
//myFileUpdater("write.txt","world");
myFileDeleter("write.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }