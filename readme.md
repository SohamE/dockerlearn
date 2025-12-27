# Docker Fundamentals

## What is Docker

Docker is a container management tool, which allows us to bundle a complete software which can be run without any platform dependency.

## What are Containers.

Small packages containing both application and the environment to run the application. The running unit of software. Container utilized the image, allocated memory cpu and all to make the image run.

## What are Images

Templates/Blueprint for containers. Contains code and required tools/runtimes. Reuse this to create multiple containers in different machines/platforms.

- Create own docker image
- created docker image for project team
- Docker hub

Docker Image has a specific file name. exactly. _Dockerfile_.

## Attached and Detached container

The docker container that runs in the foreground that is a detached mode.
When using ` docker run <image>` by default the attached mode is enabled. However for `docker start <container_name>` the container runs in detached mode.

To run a container in detached mode use the flag _-d_.

To attach to a detached container use the command attach

```
docker attach <container_name>
```

## Image Instructions

### FROM

Build image from another image.
_parameter_

- Image name ( matches from docker hub or locally)

### COPY

Copy files to container

_paramerter_

- Path in the project which files will be copied
- Path inside image where to be pasted

### RUN

Run command in the image. The command will be run in the root folder. These commands will run while **building the image**

_parameter_

- command

Eg.

```
RUN npm install
```

### CMD

The commands defined here will run when container is started.

_parameter_

- command in array

Eg.

```
CMD ["node","start"]
```

### WORKDIR

Define a work directory inside container. All the next commands will run from that path inside container.

_parameter_

- path

### EXPOSE

When the container started we want to expose a port to our local system, then we can listen on this port.
This is optional just for documentation purpose. It says the application listens to port 80. so it's easier to publish/map to local port while running the container.

_parameter_

- port

## Docker Commands

### Run

```
docker run node
```

Runs a complete container from image.

_parameter_

- name of image (node)/ id of image built

_flags_

- it: expose interactive session of the container.
- p: publish flag -> under which local port the exposed port will be accessed.
- rm: Automatically remove when container is stopped
- name: Add name to container.

```
-p local_port:exposed_port
```

-d: run in detached mode

### Attach

```
docker attach <container_name>
```

Attach a detached container.

### Process

```
docker ps -a
```

It shows processes docker created for us.

_flags_

- a : get all processes

### Stop

Stop a container

_parameter_

- name of running container

### Build

```
docker build
```

Build an image based on the Dockerfile we create for a project.

_parameter_

- path for Dockerfile

_flags_

- t: <name>:<tag> eg. node:12

### Restart

```
docker start <container_name>
```

_parameter_

- container name from docker ps

_flags_

- a: attached mode

### Logs

```
docker logs <container_name>
```

This prints all the logs printed in the application

_flags_

- f : follow mode. To keep on listening.

### Remove

```
docker rm <container_name>
```

Used to remove stopped containers. Cannot remove running containers, results to error.

### Images

```
docker images
```

Lists all the images we have

### Remove images

```
docker rmi <image_id>
```

Removes images. Images can be removed if no container is using it.(running/stopped)

### Prune

```
docker image prune
```

remove all images.

### Copy

```
# copy to container like config files for application.
docker cp <path_source_local> <container_name>:<path_destination_container>
# copy to local like log files.
docker cp <container_name>:<path_source_container> <path_destination_local>
```

Allows us to copy files to or from a container.

## Important Notes

1. Images are Read only. If any change is made to the Dockerfile we have to re-build the image. When a Dockerfile is rebuild it uses the cached results of instruction, the results were cached when the first build ran. This is called layer based architecture, every instructions are layer. When 1 layer/instruction changes, the subsequent/next instructions are rebuild and not used from cache.

If a js file changes the whole _npm i_ will re run and not be used from cache.

```
COPY . /app

RUN npm install
```

The below is more performant, the _npm i_ will be cached if nothing changes in package.json.

```
COPY package.json /app

RUN npm install

COPY . /app

```

2. Docker run creates a new container. Use Docker restart to start an existing container. if the image did not change.

3. If a container in detached state. There are 2 ways to check logs

- attach the container again using ` docker attach <container_name>`. This will not show past logs.
- use the log command using `docker log <container_name>`. Shows all logs

4. Remove stopped containers automatically using _--rm_ flag on run command
