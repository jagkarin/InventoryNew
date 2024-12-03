import React from 'react';
import './css/product.css';

const ProductForm = ({ newProduct, setNewProduct, isEditing, handleProduct, deleteProduct }) => {
    return (
        <form>
            {/* ช่องแสดงรหัสสินค้าที่ได้รับจาก Backend */}
            <div>
                <label>รหัสสินค้าหรืออุปกรณ์:</label>
                <input
                    type="text"
                    value={newProduct.code || 'ระบบจะสร้างให้อัตโนมัติ'}
                    disabled
                />
            </div>

            {/* ชื่อสินค้า */}
            <div>
                <label>ชื่ออุปกรณ์:</label>
                <input
                    type="text"
                    value={newProduct.name || ''}
                    onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                />
            </div>

            {/* Stock */}
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    value={newProduct.quantity || ''}
                    onChange={e => setNewProduct({ ...newProduct, quantity: e.target.value })}
                />
            </div>

            {/* ประเภท */}
            <div>
                <label>ประเภท:</label>
                <select
                    value={newProduct.category || ''}
                    onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                >
                    <option value="">กรุณาเลือก</option>
                    <option value="electronics">อิเล็กทรอนิกส์</option>
                    <option value="furniture">เฟอร์นิเจอร์</option>
                </select>
            </div>

            {/* รายละเอียด */}
            <div>
                <label>รายละเอียด:</label>
                <textarea
                    value={newProduct.description || ''}
                    onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                ></textarea>
            </div>

            {/* ปุ่ม */}
            <div className="form-buttons">
                <button type="button" className="btn-confirm" onClick={handleProduct}>
                    {isEditing ? 'อัปเดตสินค้า' : 'เพิ่มสินค้า'}
                </button>
                <button 
                    type="button" 
                    className="btn-cancel" 
                    onClick={() => deleteProduct(newProduct.code)}
                >
                    ลบ
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
