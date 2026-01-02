# Docker Networking

If our application running on docker container, want's to talk to an API, third party in WWW, not owned by us, to exchange data.
Maybe our application wants to communicate with our local machine where a database is setup. Container to Local communication.
Maybe other container is running a databases and another container needs to connect to that. A cross container communication.
To solve the above issues we need docker networking.

## Docker Container to WWW

Out of the box docker container can communicate with WWW. No configuration required.

## Docker Container to local host

localhost can be changed to following
This special address is the ip address of the host machine seen from inside docker container.

```
host.docker.internal
```

## Cross Container Communication

### Way 1

Run the container and then inspect the container using `docker container inspect mongodb`.
Then get the IPaddress from the output. Using this IP address we can make other containers communicate with this container.

### Way 2

Create a network with ` docker network create <network-name>`.
This is a docker internal network which lets us communicate with multiple docker containers internally.

`docker network ls ` - lists all available networks.

To add a container to this network use the special flag _network_ in the run command.

`docker run -d --name mongodb --network <network-name> mongo`

Once we have all our containers in the same network, we just have to replace the IP address in our code base with the container name our application wants to talk to.

```
mongoose.connect(
  "mongodb://localhost:27017/swfavorites",
  ...
);
```

This above will traslate to following. The mongo container must be in the same network. The name translates the IP address to container name.

```
mongoose.connect(
  "mongodb://<mongodb-container-name>:27017/swfavorites",
  ...
);
```

To connect an existing container to a network use

```
 docker network connect <network-name> <container-name>
```
