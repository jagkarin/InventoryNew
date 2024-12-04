import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ลงทะเบียนส่วนประกอบที่จะใช้งานใน Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WarehouseDashboard() {
    const [chartData, setChartData] = useState(null); // ใช้สำหรับเก็บข้อมูลกราฟ

    // ข้อมูลสำหรับกราฟสต็อกสินค้า
    const stockData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'สต็อกสินค้า',
                data: [200, 180, 150, 160, 190, 220, 250],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // ข้อมูลสำหรับกราฟการจัดส่งสินค้า
    const deliveryData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'การจัดส่งสินค้า',
                data: [50, 70, 60, 90, 80, 100, 120],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    // ข้อมูลสำหรับกราฟการเบิกสินค้า
    const withdrawalData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'การเบิกสินค้า',
                data: [20, 30, 25, 40, 35, 50, 45],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // ข้อมูลสำหรับกราฟการคืนสินค้า
    const returnsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'การคืนสินค้า',
                data: [5, 10, 8, 12, 15, 20, 25],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
            },
        ],
    };

    const handleButtonClick = (data) => {
        setChartData(data); // เปลี่ยนข้อมูลกราฟตามปุ่มที่กด
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>แดชบอร์ดคลังสินค้า</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={cardStyle}>
                    <h2>สต็อกสินค้า</h2>
                    <p>200 หน่วย</p>
                    <button onClick={() => handleButtonClick(stockData)}>แสดงกราฟสต็อกสินค้า</button>
                </div>
                <div style={cardStyle}>
                    <h2>การจัดส่งสินค้า</h2>
                    <p>120 รายการ</p>
                    <button onClick={() => handleButtonClick(deliveryData)}>แสดงกราฟการจัดส่ง</button>
                </div>
                <div style={cardStyle}>
                    <h2>การเบิกสินค้า</h2>
                    <p>45 รายการ</p>
                    <button onClick={() => handleButtonClick(withdrawalData)}>แสดงกราฟการเบิก</button>
                </div>
                <div style={cardStyle}>
                    <h2>การคืนสินค้า</h2>
                    <p>25 รายการ</p>
                    <button onClick={() => handleButtonClick(returnsData)}>แสดงกราฟการคืน</button>
                </div>
            </div>
            {chartData && (
                <div style={{ width: '60%', margin: '20px auto' }}>
                    <Bar data={chartData} options={{ responsive: true }} />
                </div>
            )}
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

export default WarehouseDashboard;