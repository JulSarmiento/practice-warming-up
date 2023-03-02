const mongoose = require('mongoose');

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.94wxqpb.mongodb.net/${pro}`;

mongoose.set('strictQuery', false)

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB Connected.');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
