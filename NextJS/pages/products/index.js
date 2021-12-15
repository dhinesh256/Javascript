import Link from "next/link"
const Product = () => {
    
    let productID = 23
    return (
        <div>
            <h1>Product 1</h1>
            <h1>Product 2</h1>
            <h1>Product 3</h1>

            <Link href={`products/${productID}`}>
                <a>
                    Go to review
                </a>
            </Link>
        </div>
        
    )
}

export default Product