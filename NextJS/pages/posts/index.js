import Link from 'next/link'

const Posts = ({posts}) => {
    return (
    <div>
        <h1>Hello world</h1>
        {posts.map((post) => {
            return(
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref>
                        <p>{`${post.id}. ${post.title}`}</p>
                    </Link>
                    <hr />
                </div>
            )
        })}
    </div>
    )
}

export default Posts

export async function getStaticProps(){
    const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await posts.json()

    return {
        props: { posts: data }
    }
}