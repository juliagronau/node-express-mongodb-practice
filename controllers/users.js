import client, { ObjectId } from "../db/mongo.js";
client.connect();

export const getAllUsers = async (req, res) => {
  try {
    const results = await client
      .db("practice")
      .collection("users")
      .find() // returns a special object called "Cursor" that has several methods e.g. toArray, limit
      .limit(100)
      .toArray();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await client
      .db("practice")
      .collection("users")
      .findOne({ _id: { $eq: ObjectId(id) } });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// this setup does not follow a schema, meaning that fields can be altered with every post request which causes inconsistency in the database. This is why mongoos is useful.
export const createNewUser = async (req, res) => {
  try {
    const results = await client
      .db("practice")
      .collection("users")
      .insertOne({ name: "Some name", age: 20 });
    res.json(results.ops[0]); // what does .ops do?
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
