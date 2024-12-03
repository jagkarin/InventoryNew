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
        <div>
            <h1>Welcome to the Dashboard</h1>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <Bar data={data} options={options} />
            </div>
            {/* เพิ่มเนื้อหา Dashboard ที่คุณต้องการ */}
        </div>
    );
}

export default Dashboard;