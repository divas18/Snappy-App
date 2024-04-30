import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectDatabase = async () => {
    if (isConnected) {
        console.log("mongo Db is already connected");
        return isConnected;
    }

    try {
        let res = await mongoose.connect(process.env.MONGO_URI!);
        isConnected = res.connection
        console.log("MongoDb connected successfully");
        return isConnected;
    } catch (err) {
        console.error(err);
        throw new Error(`failed to connect to Database ${err}`)
    }
}

export default connectDatabase;