// const connectionString=
// 'mongodb+srv://archie:<password>@cluster0.nfddb.mongodb.net/?retryWrites=true&w=majority'

import mongoose from 'mongoose'


const connectDB=(url)=>{
    return mongoose.connect(url)
}

export default connectDB