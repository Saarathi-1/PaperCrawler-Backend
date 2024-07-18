import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const { MONGO_URI } = process.env

const connectToDatabase = () => {
	mongoose
		.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => {
			console.log('MongoDB connected')
		})
}

export default connectToDatabase