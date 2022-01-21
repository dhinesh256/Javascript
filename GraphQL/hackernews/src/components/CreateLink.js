import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';


const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

const DELETE_LINK_MUTATION = gql`
  mutation DeleteMutation(
    $id: ID!
  ) {
    delete(id: $id) {
      id
    }
  }
`;

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });
  const [linkid,setId] = useState('')
  
  //When we use the useMutation hook, we need to destructure out a function that can be used to call the mutation.
  //call the mutation function whenever we need to mutate
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url
    },
  });
  const [deleteLink] = useMutation(DELETE_LINK_MUTATION, {
    variables: {
      id:linkid
    },
  });

  


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <input onChange={(e)=>{
          console.log(e.target.value);
          setId(e.target.value)
      }}/>
      {/* {console.log(`at the end ${linkid}`)} */}
      <button onClick={() => {deleteLink()}}>
        Delete</button>
    </div>
  );
};

export default CreateLink;