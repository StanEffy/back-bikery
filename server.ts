import {config} from 'dotenv';
import {connect} from 'mongoose';

config({path: './config.env'});

import app from './app';

const mode = process.env.NODE_ENV || "";
// @ts-ignore
const DB = mode === "production" ? process.env.DATABASE.replace('password', process.env.PASSWORD) : "mongodb://localhost:27017/bikery";
// MongoParseError: options usecreateindex, usefindandmodify are not supported
connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})
    .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3002;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err)
    // console.log(err?.name, err?.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on('uncaughtException', (err) => {
    console.log(err.name, err.message, err);
    server.close(() => {
        process.exit(1);
    });
});
