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
  ```
  -p local_port:exposed_port
  ```

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
