import { addTask, getAllTasks, deleteTask, updateTask ,toggleTaskCompletion } from "../services/task.js";
import { templateErrors } from "../helper/CustomError.js";
import mongoose from "mongoose";
const getAllTasksController = async (req, res, next) => {
    try {
        const tasks = await getAllTasks();
        return res.status(200).json({ message: 'Tasks fetched successfully', data: tasks });
    } catch (error) {
        return next(templateErrors.BAD_REQUEST(error.message));
    }
};

const addTaskController = async (req, res, next) => {
    const { text, isCompleted } = req.body;
    try {
        const newTask = await addTask(text, isCompleted);
        return res.status(201).json({ message: 'Task added successfully', data: newTask });
    } catch (error) {
        return next(templateErrors.BAD_REQUEST(error.message));
    }
};

const deleteTaskController = async (req, res, next) => {
    const {id}  = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
        {
            return next(templateErrors.BAD_REQUEST("InValid id Task"));

        }
        const data = await deleteTask(id);

        if (data.deletedCount === 0) {
            return next(templateErrors.NOT_FOUND("Task not Found"));
        }

        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        return next(templateErrors.BAD_REQUEST(error.message));
    }
}

const updateTaskController = async (req, res, next) => {
    const { text, isCompleted } = req.body;
    const { id } = req.params;
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(templateErrors.BAD_REQUEST("InValid id Task"));

            }
        const updatedTask = await updateTask(id, text, isCompleted);
        if (updatedTask == null) {
            return next(templateErrors.NOT_FOUND("Task not Found"));
        }
        return res.status(200).json({ message: 'Task updated successfully', data: updatedTask });
    } catch (error) {
        return next(templateErrors.BAD_REQUEST(error.message));
    }
}

const toggleTaskCompletionController = async (req, res, next) => {
    const { id } = req.params;
    const {isCompleted } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(templateErrors.BAD_REQUEST("InValid id Task"));
        }
        const updatedTask = await toggleTaskCompletion(id, isCompleted);
        if (updatedTask == null) {
            return next(templateErrors.NOT_FOUND("Task not Found"));
        }
        return res.status(200).json({ message: 'status of Task updated successfully', data: updatedTask });
        
    }catch (error) {
        return next(templateErrors.BAD_REQUEST(error.message));
    }
}

export {
    getAllTasksController
    , addTaskController,
    deleteTaskController,
    updateTaskController,
    toggleTaskCompletionController
};
