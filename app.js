// app.js

// require express
var app = require('express')();

// fake posts

var climbs = [
  {
  id: 1,
  name: "Essence",
  grade: [" 5.10a", " 5.10d", " 5.11a"],
  style: "sport",
  bolts: 14,
  rating: 2,
  },

  {
  id: 2,
  name: "Ghosts of Phyl and George",
  grade: ["5.8"],
  style: "sport",
  bolts: 12,
  rating: 1,
  }
]

// set view to ejs
app.set('view engine', 'ejs')

// home page
app.get('/', (req, res ) => {
  res.render('home', {climbs: climbs})
})

// route post
app.get('/climb/:id', (req, res) => {
  const climb = climbs.filter((climb) => {
    return climb.id == req.params.id
  })[0]

  // render the `climb.ejs` template
  res.render('climb', {
    name: climb.name,
    grade: climb.grade,
    type: climb.type,
    bolts: climb.bolts,
    rating: climb.ratings
  })
})

app.listen(8080)

console.log('listening on port 8080')
