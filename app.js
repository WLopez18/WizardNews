const express = require("express");
const app = express();
const postBank = require('./postBank');

app.use(express.static('public'));

app.get("/", (req, res) => {
  const posts = postBank.list();
  // console.log(posts);
  res.send(`
  <html>
  <head>
  <link rel='stylesheet' href='./style.css' />
  <title>Wizard News</title>
  </head>
  <body>
    <h1>Wizard News</h1>
    <ul>
    ${posts.map( post => {
      return `<li>${post.title}</li>`
    }).join('')}
    </ul>
  </body>
  </html>
  `);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
