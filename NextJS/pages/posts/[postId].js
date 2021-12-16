import { useRouter } from "next/router"

const PostId = ({posts}) => {

    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading....</h1>
    }

    return (
    <div>
        <h1> {posts.title}</h1>
        <p>{posts.body}</p>        
    </div>)
}

export default PostId

export async function getStaticPaths(){

    // const posts = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    // const data = await posts.json()
    // const paths = data.map((path) =>{
    //     return {
    //         params:{
    //             postId:`${path.id}`,
    //         }
    //     }
    // })

    return {
        paths: [
            {
                params : { postId : '1'},
            },
            {
                params : { postId : '2'},
            },
            {
                params : { postId : '3'},
            },
        ],
        fallback:true
    }

    // return {
    // paths,
    // fallback:false}
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    //console.log(data)
    return {
        props: { posts: data }
    }
}