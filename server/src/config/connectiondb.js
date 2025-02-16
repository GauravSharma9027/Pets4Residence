const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ Database connection failed: ", error.message)
    }
}


// Handle MongoDB connection events


mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB Connected!");
});

mongoose.connection.on("disconnected", () => {
    console.log("⚠ MongoDB Disconnected! Reconnecting...");
});

mongoose.connection.on("reconnected", () => {
    console.log("🔄 MongoDB Reconnected!");
});

mongoose.connection.on("disconnecting", () => {
    console.log("⚠ MongoDB Disconnecting...");
});

mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
});

mongoose.connection.on("close", () => {
    console.log("🔴 MongoDB Connection Closed!");
});

mongoose.connection.on("fullsetup", () => {
    console.log("✅ MongoDB Replica Set is Fully Setup!");
});

mongoose.connection.on("all", () => {
    console.log("✅ All MongoDB Nodes Connected!");
});

mongoose.connection.on("reconnectFailed", () => {
    console.error("❌ MongoDB Reconnection Failed! Manual intervention needed.");
});

module.exports = connectDB;

// connected       :- When successfully connected to MongoDB
// disconnected	   :- When the connection is lost
// reconnected     :- When MongoDB reconnects after a disconnect
// disconnecting   :- When the connection is about to be closed
// error	       :- When there is an error in the connection
// close	       :- When the connection is fully closed
// fullsetup       :- When a replica set is fully connected
// all             :- When all nodes of a replica set are connected
// reconnectFailed :- When Mongoose fails to reconnect
