const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    {
      title: "A",
      message: " mazing develop applications/sevices easily"
    },
    {
      title: "W",
      message: " onderful"
    },
    {
      title: "E",
      message: " JS uses JavaScript to render HTML"
    },
    {
      title: "S",
      message: " imple Sintax"
    },
    {
      title: "O",
      message: " ptimized"
    },
    {
      title: "M",
      message: " ulti-use"
    },
    {
      title: "E",
      message: " xtraordinary"
    },
  ];

  const subtitle = "It's a modeling language for creating HTML pages using JS"

  res.render('pages/index', {
    qualities: items,
    subtitle: subtitle,
  })
})

app.get('/about', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('Running!');