const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/leftRightDB"
);

const candidateMatchesSeed = 
[
    {
        name: "Elizabeth Warren",
        img: "/images/elizabeth-warren_red_profile.png",
        headImg: "/images/elizabethWarren-cutout_1024x1024.png",
        bannerImg: "/images/elizabeth-warren-banner4.png",
        percentageMatch: 47
    },
    {
        name: "Bernie Sanders",
        img: "/images/bernie_blue_profile1.jpg",
        headImg: "/images/bernie-sanders-cutout.png",
        bannerImg: "/images/bernie-banner1.png",
        percentageMatch: 45
    },
    {
        name: "Joe Biden",
        img: "/images/joe-biden_blue_profile.png",
        headImg: "/images/joe-biden-cutout.png",
        bannerImg: "/images/joe-biden-banner.png",
        percentageMatch: 35
    },
    {
        name: "Donald Trump",
        img: "/images/trump-profile.png",
        headImg: "/images/trump-cutout.png",
        bannerImg: "/images/trump-banner1.png",
        percentageMatch: 15
    }
];

db.CandidateMatches
    .remove({})
    .then(() => db.CandidateMatches.collection.insertMany(candidateMatchesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });