# Guess Qatar Cup

**Guess Qatar Cup** - is a way to bet on the football world cup matches that will take place in Qatar in 2022.

Proof of concept, using TypeScript and NodeJS, of the Driven Education course.

## Deploy:
Link to deploy back-end: https://guess-qatar-cup.herokuapp.com/

## ⚙️ Functionalities

**People can register using:**

POST "/sign-up":<br/> 
{<br/>
 "name": (maximum 50 characters),<br/>
 "password": (minimun 4 characters)<br/>
}<br/>

**User can login using:**

POST "/sign-in" (example):
{
  "name":"test_prod",
  "password":"1234"
}

You will get a token for the authenticated routes.

**Anyone can see the matches registered:**

GET "/match":
You will get a array of objects like this:
[
  {
    "id": 1,
    "team1": "Catar",
    "team2": "Equador",
    "goalsTeam1": null,
    "goalsTeam2": null,
    "matchDate": "2022-11-20T00:00:00.000Z"
  },
  {
    "id": 2,
    "team1": "Inglaterra",
    "team2": "Irã",
    "goalsTeam1": null,
    "goalsTeam2": null,
    "matchDate": "2022-11-21T00:00:00.000Z"
  }
  ]
  
 **Anyone can see the ranking of users ranked by score:**
 
 GET "/ranking":
 You will get a array of objects like this:
[
  {
    "name": "test_prod",
    "score": "3"
  }
]

 **Anyone can change the match result (I recommend only with correct results) using:**

PUT "match/result/:idMatch" (example):

{
  "goalsTeam1":3,
  "goalsTeam2":0
}

**Only logged users can guess using:**

POST "/guess/:idMatch" (example):
Remember to use a header with a valid token.

{
  "goalsTeam1":3,
  "goalsTeam2":0
}

**Only logged users can delete your guess using:**

DELETE "/guess/:idMatch"
Remember to use a header with a valid token.


**Coming soon:**
- Front-End;


## 💻 Technologies:
The following tools were used in building the project:<br/>

**Back-end(NodeJS):**
- [Express;](https://www.npmjs.com/package/express)
- [Cors;](https://www.npmjs.com/package/cors)
- [Pg;](https://www.npmjs.com/package/pg)
- [Joi;](https://www.npmjs.com/package/joi)
- [JWT;](https://www.npmjs.com/package/jsonwebtoken)
- [Dotenv;](https://www.npmjs.com/package/dotenv)
- [Bcrypt;](https://www.npmjs.com/package/bcrypt)<br/>

**Database:**
- [PostgresSql;](https://www.npmjs.com/package/postgres)
