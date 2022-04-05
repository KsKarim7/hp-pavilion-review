import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import AxiosChart from '../AxiosChart/AxiosChart';

const Dashboard = () => {

    // const [report, setReport] = useState([])
    // useEffect(() => {
    //     axios.get('data.json')
    //         .then(data => setReport(data.data))
    // }, [])

    const [report, setReport] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setReport(data.data))
    }, [])

    // const data = [
    //     {
    //         "month": "Mar",
    //         "investment": 100000,
    //         "sell": 241,
    //         "revenue": 10401
    //     },
    //     {
    //         "month": "Apr",
    //         "investment": 200000,
    //         "sell": 423,
    //         "revenue": 24500
    //     },
    //     {
    //         "month": "May",
    //         "investment": 500000,
    //         "sell": 726,
    //         "revenue": 67010
    //     },
    //     {
    //         "month": "Jun",
    //         "investment": 500000,
    //         "sell": 529,
    //         "revenue": 40405
    //     },
    //     {
    //         "month": "Jul",
    //         "investment": 600000,
    //         "sell": 601,
    //         "revenue": 50900
    //     },
    //     {
    //         "month": "Aug",
    //         "investment": 700000,
    //         "sell": 670,
    //         "revenue": 61000
    //     }
    // ]


    return (

        <div>

            <LineChart width={800} height={500} data={report}>
                <Line dataKey={'investment'}  ></Line>
                <Line dataKey={'sell'}  ></Line>
                <Line dataKey={'revenue'}  ></Line>
                <YAxis></YAxis>
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>

            </LineChart>

            <BarChart width={800} height={40} data={report}>
                <Bar dataKey="sale" fill="#8884d8" />
            </BarChart>
        </div>


    );
};

export default Dashboard;