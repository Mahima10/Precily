const
    bodyParser = require('body-parser'),
    cors = require('cors'),
    express = require('express'),
    app = express(),
    mysqlConnection = require('./src/common/mysql-controller');

let port = process.env.PORT || 8080; // If port is not specified in .env then, default will be considered as 8080

app.use(cors());

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json('Welcome to the Chefkart Backend!');
})

// API to get add/update count.
app.get('/api/count', function (req, res) {
    try {
        mysqlConnection().connect(function (err) {
            if (err) throw err;
            let query = `SELECT * FROM precily.addUpdateCount`;
            mysqlConnection().query(query, function (err, result, fields) {
                if (result) {
                    res.status(200).send(JSON.stringify(result[0]));
                } else {
                    res.status(500).send(err);
                }
            });
        });
    }
    catch (error) {
        console.log(`Routes: Error occured while fetching add/update count: ${error.message}`);
        throw error;
    }
})

// API to get components data.
app.get('/api/components_data', function (req, res) {
    try {

        mysqlConnection().connect(function (err) {
            if (err) throw err;
            let query = `SELECT * FROM precily.components`;
            mysqlConnection().query(query, function (err, result, fields) {
                if (result) {
                    res.status(200).send(JSON.stringify(result));
                } else {
                    res.status(500).send(error);
                }
            });
        });
    }
    catch (error) {
        console.log(`Routes: Error occured while fetching add/update count: ${error.message}`);
        throw error;
    }
})

// Api for fill in initial components data.
app.post('/api/fillData', async function (req, res) {
    try {
        
        console.log("req data:", JSON.stringify(req.body));
        let { id, name, data } = req.body;
        const req_data = { id, name, data };
        mysqlConnection().connect(function (err) {
            if (err) throw err;
            let query = `insert into precily.components set ? `;
            mysqlConnection().query(query, req_data, (error, response) => {
                console.log(error || response);
                if (response) {
                    res.status(200).send('Data Filled')
                } else {
                    res.json(error);
                }
            });
        });
    }
    catch (error) {
        console.log(`Routes: Error occured while filling initial set of data: ${error.message}`);
        throw error;
    }
})

// API to update count in DB.
app.patch('/api/components_data/:name', function (req, res) {
    // Update data into DB.
    try {
      const {
        data,
      } = req.body;
  
      mysqlConnection().connect(function (err) {
        if (err) throw err;

        mysqlConnection().query(`SELECT id from  precily.components WHERE name = ${req.params.name}`,
          function (err, result, fields) {
            if (err) throw err;
            console.log("data::", JSON.stringify(result));
            mysqlConnection().query(`UPDATE precily.components SET data="${data}", date_updated="${Date.now()}" WHERE id = ${result.id}`,
          function (err, result, fields) {
            if (err) throw err;
            console.log("data::", JSON.stringify(result));
            res.end(null);
          });
            res.end(null);
          });
      });
    }
    catch (error) {
      console.log(`Routes: Error: ${error.message}`);
      throw error;
    }
  })

module.exports = app.listen(port, () => console.log('Server listening on port: ' + port));
