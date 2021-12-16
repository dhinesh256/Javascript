import { useRouter } from 'next/router'

function Product({ product }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </div>
  )
}

export default Product

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://localhost:4000/products/${params.productIdISR}`
  )
  const data = await response.json()
  console.log(`Generating page for /products/${params.productIdISR}`)

  return {
    props: {
      product: data
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productIdISR: '1' } }],
    fallback: true
  }
}