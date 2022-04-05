import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"


const Dashboard = () => {
    const [report, setReport] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setReport(data.data))
    }, [])

    return (

        <div>
            <h3 className='header'>Our monthly sales report is shown below</h3>
            <div className='graph'>
                <h3 className='title'>Month wise sell:</h3>

                <LineChart width={800} height={400} data={report}>
                    <Line dataKey={'investment'}  ></Line>
                    <Line dataKey={'sell'}  ></Line>
                    <Line dataKey={'revenue'}  ></Line>
                    <YAxis></YAxis>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>

                </LineChart >
            </div >

            <div className='graph'>
                <h3 className='title'>Investment Vs Revenue:</h3>
                <BarChart width={800} height={400} data={report}>
                    <Bar dataKey="sell" fill="#8884d8" />
                    <YAxis></YAxis>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div >


    );
};

export default Dashboard;