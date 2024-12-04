// Dashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ลงทะเบียนส่วนประกอบที่จะใช้งานใน Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
    // ข้อมูลสำหรับกราฟ
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // ตัวเลือกกราฟ
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to the Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={cardStyle}>
                    <h2>Total Sales</h2>
                    <p>1,234</p>
                </div>
                <div style={cardStyle}>
                    <h2>New Customers</h2>
                    <p>123</p>
                </div>
                <div style={cardStyle}>
                    <h2>Orders</h2>
                    <p>456</p>
                </div>
                <div style={cardStyle}>
                    <h2>Returns</h2>
                    <p>12</p>
                </div>
            </div>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <Bar data={data} options={options} />
            </div>
            {/* เพิ่มเนื้อหา Dashboard ที่คุณต้องการ */}
        </div>
    );
}

// สไตล์สำหรับกล่อง
const cardStyle = {
    flex: '1',
    margin: '0 10px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
};

export default Dashboard;