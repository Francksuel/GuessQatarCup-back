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

POST "/sign-in" (example):<br/>
{<br/>
  "name":"test_prod",<br/>
  "password":"1234"<br/>
}<br/>

You will get a token for the authenticated routes.<br/>

**Anyone can see the matches registered:**

GET "/match":<br/>
You will get a array of objects like this:<br/>
[<br/>
  {<br/>
    "id": 1,<br/>
    "team1": "Catar",<br/>
    "team2": "Equador",<br/>
    "goalsTeam1": null,<br/>
    "goalsTeam2": null,<br/>
    "matchDate": "2022-11-20T00:00:00.000Z"<br/>
  },<br/>
  {<br/>
    "id": 2,<br/>
    "team1": "Inglaterra",<br/>
    "team2": "Irã",<br/>
    "goalsTeam1": null,<br/>
    "goalsTeam2": null,<br/>
    "matchDate": "2022-11-21T00:00:00.000Z"<br/>
  }<br/>
  ]<br/>
  
 **Anyone can see the ranking of users ranked by score:**
 
 GET "/ranking":<br/>
 You will get a array of objects like this:<br/>
[<br/>
  {<br/>
    "name": "test_prod",<br/>
    "score": "3"<br/>
  }<br/>
]<br/>

 **Anyone can change the match result (I recommend only with correct results) using:**

PUT "match/result/:idMatch" (example):<br/>

{<br/>
  "goalsTeam1":3,<br/>
  "goalsTeam2":0<br/>
}<br/>

**Only logged users can guess using:**

POST "/guess/:idMatch" (example):<br/>
Remember to use a header with a valid token.<br/>

{<br/>
  "goalsTeam1":3,<br/>
  "goalsTeam2":0<br/>
}<br/>

**Only logged users can delete your guess using:**

DELETE "/guess/:idMatch"<br/>
Remember to use a header with a valid token.<br/>


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
