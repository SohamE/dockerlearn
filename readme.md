# Multi container setup project

We have to expose the backend and front end ports for them to communicate with each other. They must not communicate internally using docker network. Hence we need address which browser understands.
The database and backend will be communicating internally using docker network.
