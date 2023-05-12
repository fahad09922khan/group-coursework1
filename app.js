const express = require('express');
const PORT = 3000;
var path = require("path");
const lessons = [
    { 'topic': 'math', 'location': 'hendon', 'price': 100 },
    { 'topic': 'math', 'location': 'colindale', 'price': 80 },
    { 'topic': 'math', 'location': 'brent cross', 'price': 90 },
    { 'topic': 'math', 'location': 'golders green', 'price': 120 },
];
const User = [{
    "Email": "abc@gmail.com",
    "Password": "123$$$123",
}]

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/lessons', (req, res) => {
    res.send(lessons);
});

app.get('/user', (req, res) => {
    res.send(User);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})



// app.use(express.json());
// app.use(express.static(__dirname + '/fetch.html'));
// app.use(express.static('public'));
// app.get('*', (req, res, ) => {
//     res.sendFile(path.resolve(__dirname, 'fetch.html'));
// });

// app.get('/', (req, res, next) => {
//     res.send('select a collection, e.g.,/lessons')
// })