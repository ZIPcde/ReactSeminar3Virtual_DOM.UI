import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState();
    const [fahrenheit, setFahrenheit] = useState();

    const convertToCelsius = () => {
        const c = (parseFloat(fahrenheit) - 32) * (5 / 9);
        setCelsius(c.toFixed(2));
    };

    const convertToFahrenheit = () => {
        const f = (parseFloat(celsius) * (9 / 5)) + 32;
        setFahrenheit(f.toFixed(2));
    };

    return (
        <div>
            <TextField
                label="Градусы Фаренгейта"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
            />
            <Button onClick={convertToCelsius} variant="contained">Конвертировать в Цельсии</Button>
            <div>{celsius} °C</div>
            <TextField
                label="Градусы Цельсия"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
            />
            <Button onClick={convertToFahrenheit} variant="contained">Конвертировать в Фаренгейтах</Button>
            <div>{fahrenheit} °F</div>
        </div>
    );
}

export default TemperatureConverter;
