# Docker compose

## What is docker compose

A single configuration Tool to orchestrate multi container project setup. A single command to spin up or spin down project.
This helps us configure following in a single file

- Published Ports
- Environment Variables
- Networks
- Volumes

## What docker compose is not

This will not replace Dockerfiles.
This will not replace Images or Containers
THis is not suited for managin multiple containers on different hosts (multiple machines).

## How to setup docker compose

we need a file called `docker-compose.yaml`

### Important attributes

**version** - version of docker compose. (obsikete, recent docker compose uses the latest version)
**services** - nested data, defining the list of containers with name and configuration.\

## Run docker compose

`docker-compose up`

tags:
-d: in detach mode

## Stop docker compose

`docker-compose down`

tags:
-v: remove volumes

## Notes

1. By default all containers created using docker compose are removed when stopped.
2. All services created in a docker compose file will belong to the same network. We can also specify our network inside the services if we don't want to use the default network.

```
mongodb:
  image: "mongo"
  networks:
    - goals-net
```
