import {config} from 'dotenv';
import {connect} from 'mongoose';

config({path: './config.env'});

import listen from './app';

// @ts-ignore
const DB = process.env.DATABASE.replace('password', process.env.PASSWORD);
// MongoParseError: options usecreateindex, usefindandmodify are not supported
connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})
    .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3002;

const server = listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
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
