const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({
  path: './config.env'
});

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(con => console.log('数据库连接成功'))
  .catch(err => console.log(err));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('数据插入成功！');
    
  } catch (error) {
    console.log(error);
  }
  process.exit();
}

const deleteData = async ()=>{ 
  try {
    await Tour.deleteMany();
    console.log('数据删除成功');
    
  } catch (err) {
    console.log(err);
  }
  process.exit();
}
if(process.argv[2] === '--import'){
  importData();
}else if(process.argv[2] === '--delete'){
  deleteData();
}

console.log(process.argv);