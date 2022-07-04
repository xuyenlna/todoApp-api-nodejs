import { MongoClient } from "mongodb";
// import { env } from "*/config/enviroment";

// const uri = env.MONGDODB_URI;
const uri =
  "mongodb+srv://anhxuyenln:pG58dkomEyLtJq74@cluster0.osju5iw.mongodb.net/?retryWrites=true&w=majority";

let dbInstance = null;
const DATABASE_NAME = "todoApp";

export const connectDB = async () => {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  //connect the client to server
  await client.connect();

  //assign clientDb to our dbInstance
  dbInstance = client.db(DATABASE_NAME);
};

// get database instance
export const getDB = () => {
  if (!dbInstance) throw new Error("must connect to database first!");
  return dbInstance;
};
