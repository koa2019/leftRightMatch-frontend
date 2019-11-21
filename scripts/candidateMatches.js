const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/leftRightDB"
);

const candidateMatchesSeed = [
    {
        name: "Elizabeth Warren",
        headImg: "string",
        percentageMatch: 47
    },
    {
        name: "Bernie Sanders",
        headImg: "string",
        percentageMatch: 45
    },
    {
        name: "Joe Biden",
        headImg: "string",
        percentageMatch: 35
    },
    {
        name: "Donald Trump",
        headImg: "string",
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