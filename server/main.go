package main

import (
	"github.com/kataras/iris"
	"log"
	"io/ioutil"
)

func main() {
	app := iris.New()

	app.Post("/confirmation", func(c iris.Context) {
		log.Println("\n============= REQUEST =============")


		data := c.Request().Body

		dataBytes, err := ioutil.ReadAll(data)
		if err != nil {
			panic(err.Error())
		}

		log.Println("BODY: \n",string(dataBytes))


		headers := c.Request().Header

		log.Println("HEADERS: \n", headers)

		c.JSON(iris.Map{
			"data": "feels so good",
		})

	})

	app.Run(iris.Addr(":8080"))


}



