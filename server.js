const express = require('express')
const cors = require('cors');
// const student = require('./models/student.model');
// const Student = require('./models/studentModel')
const app = express()
const port = 3000
require('./connection')


app.use(cors({
    origin: 'http://localhost:4200',
  }));

app.use(express.json())
// app.use(require('./routes/studentRoutes'))
// app.get('/',(req,res)=>{
//   student.find().then((result) => {
//     res.send(result)
//     console.log(result);
//   }).catch((err) => {
//     res.send(err)
//     console.log(err);
//   });
// })
app.get('/', (req,res) => {
    res.send('Hello')
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
