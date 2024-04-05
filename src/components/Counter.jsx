import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count === 0)
            return;
        setCount(count - 1);
    }
    return (
        <div>
            <Button onClick={increment} variant="contained">+1</Button>
            <div>{count}</div>
            <Button onClick={decrement} variant="contained">-1</Button>
        </div>
    );
}

export default Counter;
