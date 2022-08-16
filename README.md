# back-bikery
backend service for bikery app

## Where is it running?
Actually, it is running remotely on EC2 Amazon service. But in case something happened (It definetely can) you can start it locally

## How to start
npm i
npm start

or you can build a Docker container based on the Dockerfile. It works locally, but I am currently struggling with uploading it to aws ECS

## Tech used
Mongo with mongoose and express. 
There are no special reasons upon that, I choosed the most familiar stack to feel more comfortable. (I knew I'd have troubles with deployment and hence something new to learn from deploy process). 
