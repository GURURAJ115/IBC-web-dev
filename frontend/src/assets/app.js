const mongoose = require('mongoose');

const DB ='mongodb+srv://gururajsnaik115:yHwhQJ0xLaSDoqO3@ibc01.bvylhxx.mongodb.net/iskcon_devotees?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
    userCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('connection successful')
}).catch((err)=>console.log('no connection'));
