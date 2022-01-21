const { ApolloServer } = require('apollo-server');

const fs = require('fs');
const path = require('path');


//dummy data
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQLLLL'
},
{
    id: 'link-1',
    url: 'www.howtographql1.com',
    description: 'Fullstack tutorial for GraphQL1'
}]
//RESOLVER FUNCTIONS FOR EACH FIELD 
//GraphQL resolver function actually receives four input arguments 
const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      // 2
      feed: () => links,
    },
    Mutation : {
        post: (parent,args) => {

            let idCount = links.length

            const link = {
            id: `link-${idCount++}`,
            description: args.description,
            url: args.url,
            }
            links.push(link)
            return link
        },
        delete:(parent,args) => {
            const index = links.findIndex((a) => {
                return a.id == args.id
            }
            )
            const removed = links[index]
            console.log(index)
            links.splice(index,1)
            return removed
        }
    },
    // 3
    Link: {
      id: (parent) => parent.id,
      description: (parent) => parent.description,
      url: (parent) => parent.url,
    }
  }


// 4
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
      ),
  resolvers,
})

server
  .listen(4000, ()=>{
    console.log("Server is running")
  })
//   .then(({ url }) =>
//     console.log(`Server is running on ${url}`)
//   );