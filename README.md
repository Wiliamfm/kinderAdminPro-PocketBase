# PocketBase

Backend service built with [PocketBase](https://pocketbase.io/).

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Running Locally

### Using the binary directly

```bash
./pocketbase serve
```

The server starts on `http://localhost:8090`.

### Using Docker

```bash
docker build -t pocketbase .
docker run -p 8090:8090 pocketbase
```

## Deployment (AWS Fargate)

### 1. Authenticate with AWS and ECR

```bash
aws configure
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
```

### 2. Build and push the image

```bash
docker build -t pocketbase .
docker tag pocketbase:latest <account-id>.dkr.ecr.<region>.amazonaws.com/pocketbase:latest
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/pocketbase:latest
```

### 3. Deploy to Fargate

Update the Fargate service to pull the latest image:

```bash
aws ecs update-service --cluster <cluster-name> --service <service-name> --force-new-deployment
```

The container exposes port 8090 directly with no reverse proxy or gateway in front.

> **Note:** Each deployment replaces the previous container entirely, including its data. The current state of `pb_data` in the repository is what gets deployed.

## URLs

| Purpose         | URL              |
|-----------------|------------------|
| Admin Dashboard | `{host}/_`       |
| API             | `{host}/api`     |
