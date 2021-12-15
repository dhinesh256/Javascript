import { useRouter } from "next/router"
import Link from 'next/link'

const App = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Hello world</h1>
            <Link href={'/home'}>
                <a>
                    Go to Home
                </a>
            </Link>
            <button onClick={()=> router.push('/blog/first')}>Click here to go to Blog first page</button>

        </div>
        
    )
}

export default App