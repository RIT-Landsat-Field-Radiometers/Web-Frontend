import express from 'express';
import mysql from "mysql";
import cors from 'cors';

// Setup PostgreSQL connection
const client = mysql.createConnection({
    host: 'localhost',
    database: 'msd',
    user: 'msd',
    password: 'OsYCVTyRxuI1',
    port: 3306
});

// Setup Express server
const app = express();
const port = 6825;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const whitelist = ['http://localhost:3000'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    if(whitelist.indexOf(req.header('Origin')) !== -1) {

        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    //console.log(req.header('Origin'))
    //console.log(corsOptions)
    callback(null, corsOptions);
};
const corsWithOptions = cors(corsOptionsDelegate);
const CORS = {cors, corsWithOptions}


const router = express.Router();

router.route('/list')
    .options(CORS.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .post(CORS.corsWithOptions,(req, res)=>{
        const query = "SELECT * FROM radiometers";
        client.query(query, (err, result) => {
            if (err) {
                console.error(err);
                res.json({success: false, errMessage: err});
            } else {
                res.json({next: result, success: true});
            }
        })
    });

router.route('/notifications')
    .options(CORS.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .post(CORS.corsWithOptions,(req, res)=>{
        const radiometerId = req.body.radiometerId;
        const query = "SELECT * FROM notifications WHERE radiometer_fk = ?";
        client.query(query, [radiometerId], (err, result) => {
            if (err) {
                console.error(err);
                res.json({success: false, errMessage: err});
            } else {
                res.json({notifications: result, success: true});
            }
        })
    });

router.route('/readings')
    .options(CORS.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .post(CORS.corsWithOptions,(req, res)=>{
        const radiometerId = req.body.radiometerId;
        const measurementsQuery = "SELECT * FROM measurements WHERE radiometer_id = ?";
        client.query(measurementsQuery, [radiometerId], (err, measurements) => {
            if (err) {
                console.error(err);
                res.json({success: false, errMessage: err});
            } else {
                const envQuery = "SELECT * FROM environmental_readings where measurement_id = ?"
                const thermalQuery = "SELECT * FROM thermal_readings where measurement_id = ?";

                const envPromises = measurements.map(measurement => {
                    return new Promise((resolve, reject) => {
                        client.query(envQuery, [measurement.measurement_id], (err, result) => {
                            if (err) {
                                console.error(err);
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    })

                });

                const thermPromises = measurements.map(measurement => {
                    return new Promise((resolve, reject) => {
                        client.query(thermalQuery, [measurement.measurement_id], (err, result) => {
                            if (err) {
                                console.error(err);
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    })
                });

                Promise.all(envPromises).then(envReadings => {
                    Promise.all(thermPromises).then(thermReadings => {
                        const readings = {};
                        for (let i = 0; i < measurements.length; i++){
                            const measurement = measurements[i];
                            const envReading = envReadings[i];
                            const thermReading = thermReadings[i];
                            readings[measurement.measurement_id] = {
                                measurement,
                                envReading,
                                thermReading,
                            }

                        }
                        res.json({success: true, readings});
                    })
                })
            }
        })

    });


// Initialize routers
app.use('/radiometer', router);

app.listen(port, () => {
    console.log(`Back-end now listening at http://localhost:${port}`);

    console.log('Establishing connection to database...');
    client.connect((err) => {
        if (err) throw err;
        console.log("Success! Connected to database.")
    });
});

export {client};
