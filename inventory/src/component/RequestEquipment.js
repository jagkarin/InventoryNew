import React from 'react';

const RequestEquipment = () => {
  return (
    <div className="container my-4">
      <div className="card p-4">
        <h3 className="mb-4">เบิกอุปกรณ์</h3>
        <div className="row mb-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="รหัสอุปกรณ์" />
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>สถานะ</option>
              <option>พร้อมใช้งาน</option>
              <option>ไม่พร้อมใช้งาน</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>บริษัท</option>
              <option>บริษัท A</option>
              <option>บริษัท B</option>
            </select>
          </div>
        </div>
        <div className="text-end">
          <button className="btn btn-secondary me-2">ล้าง</button>
          <button className="btn btn-primary">ค้นหา</button>
        </div>
        <hr />
        <h5>รายการอุปกรณ์</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>รหัสอุปกรณ์</th>
              <th>ชื่ออุปกรณ์</th>
              <th>ประเภท</th>
              <th>จำนวน</th>
              <th>เพิ่ม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>คอมพิวเตอร์</td>
              <td>อิเล็กทรอนิกส์</td>
              <td>20</td>
              <td>
                <button className="btn btn-success">เพิ่ม</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestEquipment;
