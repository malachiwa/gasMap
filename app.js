const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://malachiwa:malachi1990@gasmap.ehvmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected!');
})

const stationsRouter = require('./api/routes/stations');
const companiesRouter = require('./api/routes/companies');
const usersRouter = require('./api/routes/users');

app.use(morgan('dev')); //log

app.use(express.json()); // post by json
app.use(express.urlencoded({ // post by x-www-form-urlencoded
    extended: false
}));

app.use((req, res, next) => { // midlleware for CROS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status('200').json({});
    }
    next();
})

//routes
app.use('/stations', stationsRouter);
app.use('/companies', companiesRouter);
app.use('/users', usersRouter);


app.use((req, res, next) => { // 404
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => { //error
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;