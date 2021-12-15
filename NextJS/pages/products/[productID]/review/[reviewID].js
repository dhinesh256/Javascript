import {useRouter} from 'next/router'

const ProductID = () => {

    const router = useRouter()
    const {productID,reviewID} = router.query

    return (
        <div>
            <h1>Page belongs to ProductID {productID} and the reviewID is {reviewID}</h1>
        </div>
        
    )
}

export default ProductID