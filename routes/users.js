var express = require('express');
var router = express.Router();
var Service = require('../common/sql')
/* GET users listing. */
router.get('/', function (req, res, next) {
  //  查询数据库数据
  Service.query('select * from user', [], function (result, fields) {
    res.json(result)
  });

  // 添加数据
  // Service.query('INSERT INTO user(name, sex,age) VALUES(?, ?, ?)', ['1', '2', '3'], (err, results) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(results);
  // })

  // 删除数据
  // Service.query('DELETE FROM user  WHERE id = 1', (err, results) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(results);
  // })

  // 更新数据
  //接收客户端请求的数据
  // const body = req.body;
  // console.log(body);
  //构建修改的sql语句
  // const sql = 'UPDATE user set name="王健全1" WHERE id=4';
  Service.query("UPDATE user set name='王健全1',sex='男' WHERE id=2", (err, data) => {
    if (err) return console.log(err.message);
    if (data.affectedRows !== 1) return console.log('修改失败');
    // res.send({
    //   status: 0,
    //   msg: '修改数据成功'
    // })
  })
  // con.query('UPDATE user SET name = "王健全" WHERE sex = "女"', (err, results) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(results);
  // })



});

module.exports = router;
