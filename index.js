const express = require('express')
const app = express()


const trailPosts = [
  {
    username: "TrailBlazer99",
    numberOfPeople: 4,
    mountainName: "Mount Rainier",
    yearHiked: 2023,
    description: "An unforgettable journey through glaciers and rocky ridges!",
    location: "Washington, USA",
    distance: 8.5,
    elevationGain: 4200,
    difficultyLevel: "Hard",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Rainier20200906.jpg/640px-Rainier20200906.jpg"
  },
  {
    username: "HikerJohn",
    numberOfPeople: 2,
    mountainName: "Half Dome",
    yearHiked: 2021,
    description: "Challenging cables section but worth every step!",
    location: "California, USA",
    distance: 14.2,
    elevationGain: 4800,
    difficultyLevel: "Hard",
    imageUrl: "https://www.yosemite.com/wp-content/uploads/2023/04/panorama-trail-spring.jpg"
  },
  {
    username: "MountainExplorer",
    numberOfPeople: 5,
    mountainName: "Mount Katahdin",
    yearHiked: 2022,
    description: "Breathtaking summit and a rewarding experience.",
    location: "Maine, USA",
    distance: 10.4,
    elevationGain: 4150,
    difficultyLevel: "Hard",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJYSdxH4x7CGDPHuf-OrjSTYUFH87ofC-9w&s"
  },
  {
    username: "NatureLover",
    numberOfPeople: 3,
    mountainName: "Angel's Landing",
    yearHiked: 2020,
    description: "Thrilling heights and stunning canyon views.",
    location: "Utah, USA",
    distance: 5.4,
    elevationGain: 1500,
    difficultyLevel: "Moderate",
    imageUrl: "https://i0.wp.com/www.parkrecord.com/wp-content/uploads/2022/08/6c5baced-4763-51f0-8925-c71901deb6c0.jpg?fit=1200%2C1666&ssl=1"
  },
  {
    username: "SummitSeeker",
    numberOfPeople: 6,
    mountainName: "Mount Whitney",
    yearHiked: 2019,
    description: "The tallest peak in the lower 48 states!",
    location: "California, USA",
    distance: 22,
    elevationGain: 6100,
    difficultyLevel: "Hard",
    imageUrl: "https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2022-04/VC_Mt-Whitney-gty-512474594_RF_1280x640.jpg.webp?itok=v9OZYjUv"
  },
  {
    username: "RockyRidge",
    numberOfPeople: 2,
    mountainName: "Pikes Peak",
    yearHiked: 2023,
    description: "Long but rewarding hike with great views!",
    location: "Colorado, USA",
    distance: 13.5,
    elevationGain: 4500,
    difficultyLevel: "Hard",
    imageUrl: "https://www.colorado.com/_next/image?url=https%3A%2F%2Fapi.colorado.com%2F%2Fsites%2Fdefault%2Ffiles%2Flegacy_drupal_7_images%2FPikes%2520Peak%2520and%2520Garden%2520of%2520the%2520Gods.jpg&w=3840&q=75"
  },
  {
    username: "AdventurousAmy",
    numberOfPeople: 4,
    mountainName: "Grand Teton",
    yearHiked: 2022,
    description: "Rock scrambling and stunning alpine scenery.",
    location: "Wyoming, USA",
    distance: 12,
    elevationGain: 5400,
    difficultyLevel: "Hard",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtqHsa7LV45iKSfonAeuqWIf8nAugalQi4w&s"
  },
  {
    username: "WildTrailWalker",
    numberOfPeople: 3,
    mountainName: "Mount Washington",
    yearHiked: 2021,
    description: "Strong winds but incredible summit views!",
    location: "New Hampshire, USA",
    distance: 8.2,
    elevationGain: 4000,
    difficultyLevel: "Moderate",
    imageUrl: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/BBY3LHVPOEI6PM5RAZOYS35A3Y.jpg?auth=abaf5d3991a19b78af6836ec0c064f28b45cf3c0b9e635ff436aacaca6b7c41c&width=1440"
  },
  {
    username: "PeakHunter",
    numberOfPeople: 5,
    mountainName: "Mount Elbert",
    yearHiked: 2023,
    description: "A challenging but accessible 14er with stunning views.",
    location: "Colorado, USA",
    distance: 9.5,
    elevationGain: 4700,
    difficultyLevel: "Hard",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSafpWMYfq0mYcuOT6PNhUlkvRRUHkDmzjDQ&s"
  },
  {
    username: "HikingQueen",
    numberOfPeople: 3,
    mountainName: "Mount Hood",
    yearHiked: 2020,
    description: "A snowy climb with breathtaking sunrise views.",
    location: "Oregon, USA",
    distance: 7.5,
    elevationGain: 5300,
    difficultyLevel: "Hard",
    imageUrl: "https://static.wixstatic.com/media/35f303_7efe7205cb0f4acabe4456ed8fba6a4c~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/35f303_7efe7205cb0f4acabe4456ed8fba6a4c~mv2.jpg"
  }
];

app.set("view engine", "ejs")

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html")
})


// app.get("/", (request, response) => {
//   response.render("overview.ejs", inventory[0])
// })

app.get("/all", (request, response) => {
  response.render("overview.ejs", { trailPosts} )
})
// https://chatgpt.com/share/67a26d84-16d8-8011-87b7-672b67f6ade2  I used chatGPT to figure out how to grab trailPosts
app.get("/trail/:num", (request, response) => {
  const searc = request.params.num
  console.log(searc)
  response.render("post.ejs", trailPosts[searc])
})


app.listen(3000, () => {
    console.log("Server running")
  })