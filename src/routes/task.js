import { Router } from "express";
import { addTaskController, getAllTasksController, deleteTaskController, updateTaskController, toggleTaskCompletionController } from "../controllers/task.js";
const router = Router();

router.get('/', getAllTasksController);
router.post('/', addTaskController);
router.delete('/:id', deleteTaskController);
router.put('/:id', updateTaskController);
router.patch('/:id/toggle-completion', toggleTaskCompletionController);

export default router;