import * as mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export interface IUser extends mongoose.Document {
    username: string,
    password: string
}

export default mongoose.model<IUser>('User', userSchema);