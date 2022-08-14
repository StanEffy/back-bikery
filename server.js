const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

const PORT = 8080;
const HOST = '0.0.0.0';

const DB = process.env.DATABASE.replace('password', process.env.PASSWORD);
// MongoParseError: options usecreateindex, usefindandmodify are not supported
mongoose
    .connect(DB, {
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
