# FreeCodeCamp API Projects

## Request Header Parser Microservice

* **Objective**: Build a full stack JavaScript app that is functionally similar to this: https://cryptic-ridge-9197.herokuapp.com/api/whoami/ and deploy it to Heroku.
* **User Story**: I can get the IP address, language and operating system for my browser.

### To run this app with docker:
* Build image: `docker build -t rumpel78/headerparser .`
* Run container: `docker run -p8080:8080 --name fcc_headerparser rumpel78/headerparser`  
* Open in browser: http://localhost:8080 and you will see your request headers
* To remove the container run: `docker rm fcc_headerparser -f`

### To run this app with nodejs and without docker:
* Enter source directory: `cd src`
* Install packages: `npm install`
* Start nodjs server: `npm start`  
* Open in browser: http://localhost:8080 and you will see your request headers

See the result under: https://headerparser.app.rzipa.at/  
To take a look at the other projects go to https://app.rzipa.at
