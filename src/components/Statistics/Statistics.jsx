import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilites/localStorage";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Statistics = () => {
    const routeData = JSON.parse(useLoaderData());
    const localStorageData = getStoredData();

    //Total amount price
    let totalAmount = 0;
    for (let key of routeData) {
        totalAmount += Number(key.price);
    }

    let filtered = {};
    for (let i of localStorageData) {
        for (let j of routeData) {
            if (i === j.id) {
                filtered[i] = j;
            }
        }
    }
    const storedData = Object.values(filtered);

    //Total donation amount
    let totalDonation = 0;
    for (let key of storedData) {
        totalDonation += Number(key.price);
    }

    //pie chart
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;