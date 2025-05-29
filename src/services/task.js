import Task from "../models/task.js ";

const getAllTasks = async() => {

    const Tasks = await Task.find();
    return Tasks;
}

const addTask = async (text , isCompleted) => {
    const taskItems = ({ text, isCompleted });
    const dataTask = await Task.create(taskItems);
    
    return dataTask;

}

const deleteTask = async (id) => {
    const data = await Task.deleteOne({ _id: id });
    return data;
}

const updateTask = async (id, text, isCompleted) => {
    
    const updatedTask = await Task.findByIdAndUpdate(
       { _id: id},
        { text, isCompleted },
        { new: true }
    );

    return updatedTask;
}
const toggleTaskCompletion = async (id, isCompleted) => {
    const updatedTask = await Task.findByIdAndUpdate(
        { _id: id },
        { isCompleted },
        { new: true }
    );
    return updatedTask;
}

export { getAllTasks, addTask, deleteTask, updateTask, toggleTaskCompletion };