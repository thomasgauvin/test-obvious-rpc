# test-obvious-rpc

![image](https://user-images.githubusercontent.com/35609369/187830657-9902f51e-bfdc-4b7a-809e-10420ade84d0.png)

This repository consists of 2 projects: a create-react-app and an express server. 

The create-react-app is stored in /frontend. The express server is stored in /frontend/src/api. The only reason for this is that create-react-app does not watch imports outside of /src and thus the developer experience is worse, requiring restarting the create-react-app dev server ('npm start') when a change is made to the backend contract. 

This work works off of the work done by antimatter15 in this repository: [https://github.com/antimatter15/obvious-rpc](https://github.com/antimatter15/obvious-rpc). 

The express server and the react app are to be deployed separated. 

## Getting started

### Start the express server

1. Navigate to /frontend/src/api
2. npm install, npm start

### Start the Create-React-App

1. Navigate to /frontend
2. npm install, npm start

