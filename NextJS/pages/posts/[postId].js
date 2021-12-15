const PostId = ({posts}) => {
    return (
    <div>
        <h1> {posts.title}</h1>
        <p>{posts.body}</p>        
    </div>)
}

export default PostId

export async function getStaticPaths(){
    const posts = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    const data = await posts.json()
    const paths = data.map((path) =>{
        return {
            params:{
                postId:`${path.id}`,
            }
        }
    })

    return {
    paths,
    fallback:false}
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