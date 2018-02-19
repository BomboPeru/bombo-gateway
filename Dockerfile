FROM golang:alpine
RUN apk add --no-cache git mercurial
ADD server /go/src/github.com/Chimpcode/bombo-open-api

RUN go get github.com/kataras/iris/...
RUN go get github.com/iris-contrib/middleware/cors

RUN go install github.com/Chimpcode/bombo-open-api

CMD ["/go/bin/bombo-open-api"]
EXPOSE 9800