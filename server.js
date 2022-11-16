const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});
const app = require('./app');


mongoose.connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(con => console.log('数据库连接成功'))
    .catch(err => console.log(err))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on http://127.0.0.1:${port}`);
});