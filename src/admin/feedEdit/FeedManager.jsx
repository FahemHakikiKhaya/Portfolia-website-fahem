import React from 'react'

function FeedManager() {
    return (
        <div className="container">
        <table className="table mt-4 border text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>TItle</th>
              <th>Tag</th>
              <th>Image</th>
              <th colSpan="2">Description</th>
            
            </tr>
          </thead>
        
          <tbody></tbody>

        </table>

        <table className="w-100 mb-5 ">
        <tr>
          <td>
            <input
              placeholder="Name"
              name="productName"
              type="text"
              className="form-control"
            />
          </td>
          <td>
            <input
              placeholder="Price"
              name="price"
              type="number"
              className="form-control"
            />
          </td>
          <td>
            <input
              placeholder="Image"
              name="productImage"
              type="text"
              className="form-control"
            />
          </td>
          <td>
            <input
              placeholder="Description"
              name="description"
              type="text"
              className="form-control"
            />
          </td>
          <td>
            <select
              name="category"
              className="form-control"
            >
              <option value="">All Items</option>
              <option value="kaos">Kaos</option>
              <option value="celana">Celana</option>
              <option value="aksesoris">Aksesoris</option>
            </select>
          </td>
          <td colSpan="2">
            {/* btn btn-outline-primary */}
            <button classname="outline primary" /*onClick={addNewProduct}*/>
              Add
            </button>
          </td>
          </tr>
          </table>
        
           
        </div>
    )
}

export default FeedManager
