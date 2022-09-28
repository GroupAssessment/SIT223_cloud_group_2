// A Node.js prototype script showing customer vehicle data insertion to the local MongoDB instance. This will later be integrated with HTTP(s) GET/POST handling and validation using ExpressJS.


var MongoClient = require("mongodb").MongoClient
const uri = "mongodb://localhost:27017";
timeAtPost = Date.now();

    const client = new MongoClient(uri)

   
   
    const carData = {
        id: 002,
        make: "Mini",
        model: "Cooper",
        color: "Yellow",
        registration: "MRBEAN",
        time: Date()
    }
    const jsonString = JSON.stringify(carData);
    console.log(jsonString);

    const newCar = ({
        _id: carData.id,
        make: carData.make,
        model: carData.model,
        color: carData.color,
        registration: carData.registration,
        time: carData.time
        
        });
    
        function run() {
        
            const database = client.db("CheckYourCarClient");
            const collection = database.collection("customer-vehicle-data")
            
            const result = collection.insertOne(newCar);
            console.log('A document was inserted with the _id:' + result.insertedId)
    
        }

run()
