import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart } from 'recharts';

const AxiosChart = () => {
    const [report, setReport] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setReport(data.data))
    }, [])
    return (
        <BarChart width={800} height={40} data={report}>
            <Bar dataKey="sale" fill="#8884d8" />
        </BarChart>
    );
};

export default AxiosChart;