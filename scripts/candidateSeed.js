const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/leftRightDB"
);

const candidateSeed = [

  {
    name: "Elizabeth Warren",
    img: "/images/elizabeth-warren_red_profile.png",
    headImg: "/images/elizabethWarren-cutout_1024x1024.png",
    bannerImg: "/images/elizabeth-warren-banner4.png",
    iSideLink: "https://www.isidewith.com/candidates/elizabeth-warren",
    policyLink: "https://www.isidewith.com/candidates/elizabeth-warren/policies",
    parties: [
      "Democratic Party",
      "Independent Politician",
      "Liberty Union Party"
    ],
    experiences: [
      "United States Senator"
    ],
    themes: [
      "Big Government",
      "Left Wing, Progressive",
      "Collectivism"
    ],
    qualities: [
      "Honesty",
      "Leadership",
      "Charisma"
    ],
    contactInfo: {
      websites: [
        "https://www.berniesanders.com/"
      ],
      twitterAccounts: [
        "https://twitter.com/BernieSanders",
        "https://twitter.com/SenSanders"
      ],
      facebookAccounts: [
        "https://www.facebook.com/berniesanders",
        "https://www.facebook.com/senatorsanders"
      ],
      instagramAccounts: [
        "https://www.instagram.com/berniesanders"
      ]
    },
    stances: [
      {
        key: "965550",
        question: "Do you...?",
        stance: "yes"
      },
      {
        key: "965572",
        question: "WHat is ..?",
        stance: "yes"
      },
      {
        key: "965576",
        question: "Is...?",
        stance: "no"
      }
    ]
  },
  {
    name: "Bernie Sanders",
    img:  "/images/bernie_blue_profile1.jpg",
    headImg: "/images/bernie-sanders-cutout.png",
    bannerImg: "/images/bernie-banner1.png",
    iSideLink: "https://www.isidewith.com/candidates/bernie-sanders",
    policyLink: "https://www.isidewith.com/candidates/bernie-sanders/policies",
    parties: [
      "Democratic Party",
      "Independent Politician",
      "Liberty Union Party"
    ],
    experiences: [
      "United States Senator"
    ],
    themes: [
      "Big Government",
      "Left Wing, Progressive",
      "Collectivism",
      "Environmentalism",
      "Multiculturalism",
      "Tender",
      "Democratic Socialism",
      "Secular",
      "Politically Correct"
    ],
    qualities: [
      "Honesty",
      "Leadership",
      "Charisma"
    ],
    contactInfo: {
      websites: [
        "https://www.berniesanders.com/"
      ],
      twitterAccounts: [
        "https://twitter.com/BernieSanders",
        "https://twitter.com/SenSanders"
      ],
      facebookAccounts: [
        "https://www.facebook.com/berniesanders",
        "https://www.facebook.com/senatorsanders"
      ],
      instagramAccounts: [
        "https://www.instagram.com/berniesanders"
      ]
    },
    stances: [
      {
        key: "965550",
        question: "Do you...?",
        stance: "yes"
      },
      {
        key: "965572",
        question: "WHat is ..?",
        stance: "yes"
      },
      {
        key: "965576",
        question: "Is...?",
        stance: "yes"
      }
    ]
  },
  {

    name: "Joe Biden",
    img: "/images/joe-biden_blue_profile.png",
    headImg: "/images/joe-biden-cutout.png",
    bannerImg: "/images/joe-biden-banner.png",
    iSideLink: "https://www.isidewith.com/candidates/joe-biden",
    policyLink: "https://www.isidewith.com/candidates/joe-biden/policies",
    parties: [
      "Democratic Party"
    ],
    experiences: [
      "United States Vice President",
      "United States Senator"
    ],
    themes: [
      "Multiculturalism",
      "Tender",
      "Democratic Socialism",
      "Secular",
      "Politically Correct"
    ],
    qualities: [
      "Honesty",
      "Leadership",
      "Charisma"
    ],
    contactInfo: {
      websites: [
        "https://www.berniesanders.com/"
      ],
      twitterAccounts: [
        "https://twitter.com/BernieSanders",
        "https://twitter.com/SenSanders"
      ],
      facebookAccounts: [
        "https://www.facebook.com/berniesanders",
        "https://www.facebook.com/senatorsanders"
      ],
      instagramAccounts: [
        "https://www.instagram.com/berniesanders"
      ]
    },
    stances: [
      {
        key: "965550",
        question: "Do you...?",
        stance: "yes"
      },
      {
        key: "965572",
        question: "WHat is ..?",
        stance: "yes"
      },
      {
        key: "965576",
        question: "Is...?",
        stance: "yes"
      }
    ]
  },
  {
    name: "Donald Trump",
    img: "/images/trump-profile.png",
    headImg: "/images/trump-cutout.png",
    bannerImg: "/images/trump-banner1.png",
    iSideLink: "https://www.isidewith.com/candidates/donald-trump",
    policyLink: "https://www.isidewith.com/candidates/donald-trump/policies",
    parties: [
      "Republican Party"
    ],
    experiences: [
      "United States President"
    ],
    themes: [
      "Big Government"
    ],
    qualities: [
      "Leadership",
      "Charisma",
      "Patriotism"
    ],
    contactInfo: {
      websites: [
        "https://www.berniesanders.com/"
      ],
      twitterAccounts: [
        "https://twitter.com/BernieSanders",
        "https://twitter.com/SenSanders"
      ],
      facebookAccounts: [
        "https://www.facebook.com/berniesanders",
        "https://www.facebook.com/senatorsanders"
      ],
      instagramAccounts: [
        "https://www.instagram.com/berniesanders"
      ]
    },
    stances: [
      {
        key: "965550",
        question: "Do you...?",
        stance: "no"
      },
      {
        key: "965572",
        question: "WHat is ..?",
        stance: "no"
      },
      {
        key: "965576",
        question: "Is...?",
        stance: "yes"
      }
    ]
  }
];
   

db.Candidate
  .remove({})
  .then(() => db.Candidate.collection.insertMany(candidateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
