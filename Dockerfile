FROM golang:alpine
RUN apk add --no-cache git mercurial
ADD server /go/src/github.com/BomboPeru/bombo-gateway

RUN go get github.com/kataras/iris/...
RUN go get github.com/iris-contrib/middleware/cors

RUN go get github.com/BomboPeru/bombo-gateway

RUN go install github.com/BomboPeru/bombo-gateway

CMD ["/go/bin/bombo-open-api"]
EXPOSE 8080