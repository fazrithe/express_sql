const express = require('express'),
router = express.Router();

router.get('/list', function(req, res){
    let sql = `select * from users`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "User lists"
        })
    })
});

router.post('/new', function(req, res){
    let sql = `insert into users(name, gender) values (?)`;
    let values = [
        req.body.name,
        req.body.gender
    ];
    db.query(sql, [values], function(err, data, fields){
        if (err) throw err;
        res.json({
            status:200,
            mesage: "New user addes succcessfully"
        })
    })
})

module.exports = router;