import React from "react";

const ProductRow = ({ product }) => {
    const name = product.stocked ? product.name : <span style={{"color": "red"}}>{product.name}</span>
    return (
        <>
            <tr>
                {/* <td>{product.stocked ? <span>{product.name}</span> : <span style={{"color": "red"}}>{product.name}</span>}</td> */}
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        </>
    );
};

export default ProductRow;
