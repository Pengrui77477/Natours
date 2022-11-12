const fs = require('fs');

const path = `${__dirname}/../dev-data/data/users.json`;
//methods
exports.getAllUsers = (req, res) => {
    const users = JSON.parse(fs.readFileSync(path));

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })
}
exports.creatUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync(path));
    
    let id = users[users.length - 1]._id
    const sliceId = id.slice(id.length - 3, id.length);
    const changedId = (sliceId * 1 + 1).toString();
    const newId = id.replace(sliceId, changedId);

    const newUser = {_id:newId,...req.body};
    users.push(newUser);
    fs.writeFile(path,JSON.stringify(users),err=>{
        if(err) return err;
        res.status(200).json({
            message: 'success',
            data:{
                newUser
            }
        })
    })
}
exports.getUser = (req,res)=>{
    const users = JSON.parse(fs.readFileSync(path));
    const id = req.params;

    // const user = users.find((val)=>)
}
exports.updateUser = (req,res)=>{
    const users = JSON.parse(fs.readFileSync(path));
    // const id = req.params;
}
exports.deleteUser = (req,res)=>{
    const users = JSON.parse(fs.readFileSync(path));
    // const id = req.params;
}