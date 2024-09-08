import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://sakshamsrivastava1312:SakshamMongo_1312@cluster0.ax0wp9c.mongodb.net/Food_Del_Project').then (()=>{
        console.log('DB Connected');
    })
}
