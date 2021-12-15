const UserList =( { users }) =>{
    return(
        <>
        <p>List of users</p>
        {users.map((user) => {
            return(
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            )
        })}
        </>
    )
}

export default UserList

export async function getStaticProps(){
    const users = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await users.json()
    console.log(data)

    return{
        props:{
            users:data,
        }
    }

}