import React from 'react'
import { BsFillCollectionFill } from "react-icons/bs";

function Item() {
    return (
        <div className="card bg-light border-0 h-100">
  <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><BsFillCollectionFill></BsFillCollectionFill></div>
    <h2 className="fs-4 fw-bold">Fresh new layout</h2>
    <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
  </div>
</div>

    )
}

export default Item