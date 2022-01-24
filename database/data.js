// My Mongodb database contains the following data


//  dataset for "authors" collection
[{
  "_id": {
    "$oid": "61edb9062ed756bc0953339d"
  },
  "name": "kunal",
  "books": [
    "12345ONE",
    "12345Two"
  ]
},{
  "_id": {
    "$oid": "61edb95b2ed756bc0953339e"
  },
  "name": "Das Gupta",
  "books": [
    "12345ONE",
    "12345Two"
  ]
},{
  "_id": {
    "$oid": "61eeaec145930a7d8c9d6d5f"
  },
  "name": "Raj",
  "books": [
    "3469ab"
  ]
},{
  "_id": {
    "$oid": "61eeaec145930a7d8c9d6d60"
  },
  "name": "Abhishek",
  "books": [
    "231egh",
    "5l3621"
  ]
},{
  "_id": {
    "$oid": "61eeaec145930a7d8c9d6d61"
  },
  "name": "Manoj",
  "books": [
    "3469ab"
  ]
},{
  "_id": {
    "$oid": "61eeaec145930a7d8c9d6d62"
  },
  "name": "Ali",
  "books": [
    "5l3621",
    "7rab21d"
  ]
}]





//  dataset for "books" collection 
[{
  "_id": {
    "$oid": "61edba102ed756bc0953339f"
  },
  "authors": [
    {
      "$oid": "61edb9062ed756bc0953339d"
    }
  ],
  "language": "en",
  "pubDate": "2021-07-07",
  "category": [
    "computers",
    "programming",
    "tech",
    "web dev"
  ],
  "publication": {
    "$oid": "61edbb922ed756bc095333a1"
  },
  "ISBN": "12345ONE",
  "title": "Getting started with MERN",
  "numOfPages": 225
},{
  "_id": {
    "$oid": "61edbac32ed756bc095333a0"
  },
  "authors": [
    {
      "$oid": "61edb9062ed756bc0953339d"
    },
    {
      "$oid": "61edb95b2ed756bc0953339e"
    }
  ],
  "language": "en",
  "pubDate": "2021-08-07",
  "category": [
    "computers",
    "tech",
    "web dev"
  ],
  "publication": {
    "$oid": "61edbb922ed756bc095333a1"
  },
  "ISBN": "12345Two",
  "title": "Getting started with Python",
  "numOfPages": 550
},{
  "_id": {
    "$oid": "61eeb37345930a7d8c9d6d7e"
  },
  "authors": [
    "61eeaec145930a7d8c9d6d5f",
    "61eeaec145930a7d8c9d6d61"
  ],
  "language": "en",
  "pubDate": "2022-01-05",
  "numOfPages": 384,
  "ISBN": "3469ab",
  "category": [
    "programming",
    "machine learning "
  ],
  "publication": "61eeaf3645930a7d8c9d6d67",
  "title": "Let's learn Machine Learning"
},{
  "_id": {
    "$oid": "61eeb37345930a7d8c9d6d7f"
  },
  "authors": [
    "61eeaec145930a7d8c9d6d60",
    "61eeaec145930a7d8c9d6d62"
  ],
  "language": "en",
  "pubDate": "2021-11-07",
  "numOfPages": 483,
  "ISBN": "5l3621",
  "category": [
    "fiction",
    "story"
  ],
  "publication": "61eeaf3645930a7d8c9d6d68",
  "title": "Life on Mars"
},{
  "_id": {
    "$oid": "61eeb37345930a7d8c9d6d80"
  },
  "authors": [
    "61eeaec145930a7d8c9d6d60"
  ],
  "language": "en",
  "pubDate": "2021-05-03",
  "numOfPages": 380,
  "ISBN": "231egh",
  "category": [
    "art",
    "romance"
  ],
  "publication": "61eeaf3645930a7d8c9d6d69",
  "title": "The Art of Proposal"
},{
  "_id": {
    "$oid": "61eeb37345930a7d8c9d6d81"
  },
  "authors": [
    "61eeaec145930a7d8c9d6d62"
  ],
  "language": "en",
  "pubDate": "2020-04-06",
  "numOfPages": 210,
  "ISBN": "7rab21d",
  "category": [
    "games",
    "fun"
  ],
  "publication": "61eeaf3645930a7d8c9d6d69",
  "title": "How to become a great gamer"
}]






//  dataset for "publications" collection 
[{
  "_id": {
    "$oid": "61edbb922ed756bc095333a1"
  },
  "name": "KRL Publications",
  "books": [
    "12345ONE",
    "12345Two"
  ]
},{
  "_id": {
    "$oid": "61eeaf3645930a7d8c9d6d67"
  },
  "name": "Omega publishers",
  "books": [
    "3469ab"
  ]
},{
  "_id": {
    "$oid": "61eeaf3645930a7d8c9d6d68"
  },
  "name": "Saurav publication",
  "books": [
    "5l3621"
  ]
},{
  "_id": {
    "$oid": "61eeaf3645930a7d8c9d6d69"
  },
  "name": "Divya House of Publishing",
  "books": [
    "231egh",
    "7rab21d"
  ]
}
]

