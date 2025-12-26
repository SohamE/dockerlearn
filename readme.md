# Docker Fundamentals

## What is Docker

Docker is a container management tool, which allows us to bundle a complete software which can be run without any platform dependency.

## What are Containers.

Small packages containing both application and the environment to run the application. The running unit of software.

## What are Images

Templates/Blueprint for containers. Contains code and required tools/runtimes. Reuse this to create multiple containers in different machines/platforms.

- Create own docker image
- created docker image for project team
- Docker hub

## Docker Commands

### Run

```
docker run node
```

Runs a complete container from image.

_parameter_

- name of image (node)

_flags_

- it: expose interactive session of the container.

### Process

```
docker ps -a
```

It shows processes docker created for us.

_flags_

- a : get all processes
