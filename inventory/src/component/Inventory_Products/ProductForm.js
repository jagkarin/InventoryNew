import React from 'react';
import './css/product.css';


const ProductForm = ({ newProduct, setNewProduct, isEditing, handleProduct, deleteProduct }) => {
    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h4 className="card-title text-center mb-4">{isEditing ? 'แก้ไขสินค้า' : 'เพิ่มสินค้าใหม่'}</h4>
                <form>
                    {/* ช่องแสดงรหัสสินค้าที่ได้รับจาก Backend */}
                    <div className="mb-3">
                        <label htmlFor="productCode" className="form-label fw-bold">รหัสสินค้าหรืออุปกรณ์:</label>
                        <input
                            type="text"
                            id="productCode"
                            className="form-control"
                            value={newProduct.code || 'ระบบจะสร้างให้อัตโนมัติ'}
                            disabled
                        />
                    </div>

                    {/* ชื่อสินค้า */}
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label fw-bold">ชื่ออุปกรณ์:</label>
                        <input
                            type="text"
                            id="productName"
                            className="form-control"
                            value={newProduct.name || ''}
                            onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                    </div>

                    {/* Stock */}
                    <div className="mb-3">
                        <label htmlFor="productStock" className="form-label fw-bold">จำนวนสินค้า (Stock):</label>
                        <input
                            type="number"
                            id="productStock"
                            className="form-control"
                            value={newProduct.quantity || ''}
                            onChange={e => setNewProduct({ ...newProduct, quantity: e.target.value })}
                        />
                    </div>

                    {/* ประเภท */}
                    <div className="mb-3">
                        <label htmlFor="productCategory" className="form-label fw-bold">ประเภท:</label>
                        <select
                            id="productCategory"
                            className="form-select"
                            value={newProduct.category || ''}
                            onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                        >
                            <option value="">กรุณาเลือก</option>
                            <option value="electronics">อิเล็กทรอนิกส์</option>
                            <option value="furniture">เฟอร์นิเจอร์</option>
                        </select>
                    </div>

                    {/* รายละเอียด */}
                    <div className="mb-3">
                        <label htmlFor="productDescription" className="form-label fw-bold">รายละเอียด:</label>
                        <textarea
                            id="productDescription"
                            className="form-control"
                            rows="4"
                            value={newProduct.description || ''}
                            onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                        ></textarea>
                    </div>

                    {/* ปุ่ม */}
                    <div className="d-flex justify-content-between mt-4">
                        <button
                            type="button"
                            className={`btn ${isEditing ? 'btn-primary' : 'btn-success'}`}
                            onClick={handleProduct}
                        >
                            {isEditing ? 'อัปเดตสินค้า' : 'เพิ่มสินค้า'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteProduct(newProduct.code)}
                        >
                            ลบ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
