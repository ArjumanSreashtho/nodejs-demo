const express = require("express");

const app = express()

const PORT = 3900

app.get('/', (req, res) => {

  const { timeout = 5 } = req.query
  const waitFor = timeout * 1000

  const response = [
    {
      id: 1,
      name: "Kevin De Bruyne",
      injured: false,
      fitness: [70, 68, 90, 86, 89, 65],
      oponents: ["Arsenal", "Manchester United", "Liverpool", "Tottenham Hotspur", "Newcastle United", "Fulham"],
      gamePerformance: [true, false, true, true, false, true],
      perfection: [8.6, 6.9, 9.3, 7.6, 9.0],
    },
    {
      id: 2,
      name: "Erling Haaland",
      injured: false,
      fitness: [80, 73, 85, 90, 79, 95],
      oponents: ["Arsenal", "Manchester United", "Liverpool", "Tottenham Hotspur", "Newcastle United", "Fulham"],
      gamePerformance: [true, true, true, true, false, true],
      perfection: [9.1, 7.9, 9.3, 8.6, 8.3],
    },
    {
      id: 3,
      name: "Jack Grealish",
      injured: true,
      fitness: [68, 79, 83, 71, 81, 89],
      oponents: ["Arsenal", "Manchester United", "Liverpool", "Tottenham Hotspur", "Newcastle United", "Fulham"],
      gamePerformance: [false, true, false, true, false, false],
      perfection: [6.8, 8.9, 8.9, 7.0, 7.1],
    },
  ]
  setTimeout(() => {
    res.json(response)
  }, waitFor)
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})

module.exports = app