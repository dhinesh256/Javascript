import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'

function Dashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession() 
      //returns a promise and a session object(if user logged in) or null(logged out)
      console.log({ session })
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }

    securePage()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }
  return <h1>Dashboard page</h1>
}

export default Dashboard
