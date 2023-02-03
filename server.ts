import {config} from "dotenv"
import {connect} from "mongoose"

config({path: "./config.env"})

import app from "./app"

const mode = process.env.NODE_ENV || ""

const db_string: string = process.env.DATABASE as string

const DB = mode === "production" ? db_string.replace("password", process.env.PASSWORD as string) : "mongodb://127.0.0.1:27017/bikery?directConnection=true"

connect(DB, {
	// useNewUrlParser: true,
	// useCreateIndex: true,
	// useFindAndModify: false,
})
	.then(() => console.log("DB connection successful!"))

const port = process.env.PORT || 3002

const server = app.listen(port, () => {
	console.log(`App running on port ${port}...`)
})

process.on("unhandledRejection", (err) => {
	console.log("UNHANDLED REJECTION! 💥 Shutting down...")
	console.log(err)
	// console.log(err?.name, err?.message);
	server.close(() => {
		process.exit(1)
	})
})

process.on("uncaughtException", (err) => {
	console.log(err.name, err.message, err)
	server.close(() => {
		process.exit(1)
	})
})
