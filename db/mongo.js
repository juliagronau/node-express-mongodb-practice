import mongodb from "mongodb";
import "dotenv/config.js";
const { MongoClient, ObjectId } = mongodb; //mongodb is a common.js package so it cannot be destructured right away || ObjectId is needed for the getSingleUser request
const client = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});

export { client as default, ObjectId };
