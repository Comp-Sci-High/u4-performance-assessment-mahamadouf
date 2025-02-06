const express = require('express')
const app = express()


const trailPosts = [
  {
    username: "TrailBlazer99",
    numberOfPeople: 0,
    mountainName: "Mount Rainier",
    yearHiked: 2023,
    description: "An unforgettable journey through glaciers and rocky ridges!",
    location: "Washington, USA",
    distance: 8.5,
    elevationGain: 4200,
    difficultyLevel: "Hard",
    path: "/trail/0",
    imageUrl: "https://i.redd.it/yl9f0wu0dih71.jpg"
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
    path: "/trail/1",
    imageUrl: "https://pixelz.cc/wp-content/uploads/2016/11/half-dome-granite-dome-rock-formation-yosemite-national-park-california-united-states-4k-wallpaper.jpg"
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
    path: "/trail/2",
    imageUrl: "https://www.rickberk.com/images/xl/Sunrise-Mount-Katahdin.jpg"
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
    path: "/trail/3",
    imageUrl: "https://images.unsplash.com/photo-1475351177616-1e5e440dccef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5nZWxzJTIwbGFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
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
    path: "/trail/4",
    imageUrl: "https://plus.unsplash.com/premium_photo-1675315343147-13b3555e21db?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnQlMjB3aGl0bmV5fGVufDB8fDB8fHww"
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
    path: "/trail/5",
    imageUrl: "https://wallpapercat.com/w/full/4/6/b/1555167-2500x1667-desktop-hd-pikes-peak-colorado-background-photo.jpg"
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
    path: "/trail/6",
    imageUrl: "https://4kwallpapers.com/images/wallpapers/grand-teton-national-park-mountain-range-lake-reflections-1920x1080-324.jpg"
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
    path: "/trail/7",
    imageUrl: "https://live.staticflickr.com/4384/37068114632_fabf665e4a_b.jpg"
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
    path: "/trail/8",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/527eca1de4b0a82a769369f5/51b52b1e-8d1b-42c3-8fc9-74a18c2c1ec3/Mount_Elbert_015.jpg"
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
    path: "/trail/9",
    imageUrl: "https://images.unsplash.com/photo-1502329360980-310a83b3e21d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnQlMjBob29kfGVufDB8fDB8fHww"
  }
];

// ChatGPT link: https://chatgpt.com/share/67a00efc-6c34-8011-b203-f8312047fd60
app.set("view engine", "ejs")

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html")
})




app.get("/all", (request, response) => {
  response.render("overview.ejs", { trailPosts} )
})
// https://chatgpt.com/share/67a26d84-16d8-8011-87b7-672b67f6ade2  I used chatGPT to figure out how to grab trailPosts

app.get("/trail/:num", (request, response) => {
  const searc = request.params.num
  response.render("post.ejs", trailPosts[searc]);
})
app.listen(3000, () => {
    console.log("Server running")
  })