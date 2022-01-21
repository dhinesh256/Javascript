import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
{
    info
    feed{
      id
      url
      description
    }
  }
`


const LinkList = () => {

    const {loading ,error , data} = useQuery(FEED_QUERY)
    console.log(`data from server isssss ${data}`)


//   const linksToRender = [
//     {
//       id: '1',
//       description:
//         'Prisma gives you a powerful database toolkit',
//       url: 'https://prisma.io'
//     },
//     {
//       id: '2',
//       description: 'The best GraphQL client',
//       url: 'https://www.apollographql.com/docs/react/'
//     }
//   ];

  return (
    <div>
      {data && (
        <>
          {data.feed.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;