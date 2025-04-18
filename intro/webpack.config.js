const path=require('path')
module.exports={
    entry:'./src/App.js',  //  src/index.js -->if we wanted some other file to run we must say ./src/filename.js
    output:{
        filename:'main.js',   //in dist : if main.js is avaialbe use it else give what ever name is there
        path:path.resolve(__dirname,"dist")

    },
    mode:'development'
}

