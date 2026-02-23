FROM docker.io/alpine as base
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
USER app

FROM base as builder
EXPOSE 8090
COPY --chown=app:app . .

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
