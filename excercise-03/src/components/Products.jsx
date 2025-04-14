function Products({ productsList }) {
    return (
        <ul>
            {productsList.map(product => (
                <li key={product}>{product}</li>
            ))}
        </ul>
    )
}

export default Products