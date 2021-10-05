const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});


// app.use(cors());
// app.use('/login/lecturer', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });


// // app.use(cors());
// app.use('/login/tech', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });


// // app.use(cors());
// app.use('/login/student', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });


// app.use('/login/admin', (req, res) => {
//   res.send({
//     //token: JSON.stringify(req)
//     token: ''
    
//   });
//   console.log(req)
  
// });
// app.use('/loginLecturer', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
// });

// app.use('/loginTechOfficer', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
// });

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));