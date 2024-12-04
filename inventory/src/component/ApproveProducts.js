import React from 'react';

const ApproveProducts = () => {
  return (
    <div className="container my-4">
      <div className="card p-4">
        <h3 className="mb-4">อนุมัติสินค้า</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>รหัสสินค้า</th>
              <th>ชื่อสินค้า</th>
              <th>ประเภท</th>
              <th>จำนวน</th>
              <th>ยืนยัน/ยกเลิก</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>SMART EASY OPD 01</td>
              <td>เครื่องวัดความดันโลหิต</td>
              <td>10</td>
              <td>
                <button className="btn btn-success me-2">ยืนยัน</button>
                <button className="btn btn-danger">ยกเลิก</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveProducts;
