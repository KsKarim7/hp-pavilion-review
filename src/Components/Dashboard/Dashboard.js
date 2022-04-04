import React, { useEffect, useState } from 'react';
import { Line, LineChart } from 'recharts';

const Dashboard = () => {
    const [lineChart, setLineChart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLineChart(data))
    }, [])

    return (
        <LineChart width={400} height={500} lineChart={lineChart} >
            <Line ></Line>

        </LineChart>
    );
};

export default Dashboard;