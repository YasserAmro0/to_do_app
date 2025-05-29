import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true ,
        default: false
    }
});

const Task = mongoose.model("Task",taskSchema);

export default Task;