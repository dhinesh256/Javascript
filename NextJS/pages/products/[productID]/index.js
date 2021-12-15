import {useRouter} from 'next/router'

const ProductID = () => {

    const router = useRouter()
    const productID = router.query.productID

    return (
        <div>
            <h1>Page belongs to ProductID {productID} </h1>
        </div>
        
    )
}

export default ProductID