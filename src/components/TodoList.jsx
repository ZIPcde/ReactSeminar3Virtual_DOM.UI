import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div>
                <TextField
                    label="Новая задача"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button onClick={handleAddTask} variant="contained">Добавить задачу</Button>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <Card key={index} style={{ margin: '10px 0' }}>
                        <CardContent>
                            {task}
                            <IconButton aria-label="delete" onClick={() => handleDeleteTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
