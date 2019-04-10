import React from "react";
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import * as s from './styles.js'
import Protected from '../../Protected.js';
import Note from "./notes";
import AddNote from "./addnotes";
import { Button} from 'reactstrap';

const getNotes = gql`
    {
        getNotes{
          createdAt
          note
          id
        }
      }
`;

const deleteAllNotes = gql`
	mutation DeleteAllNotes {
		deleteAllNotes{
            id
		}
	}
`;

const Notes = ({ notes }) => {
    const n = notes;
    return (
        <s.Container>
            <s.Measurement>

            <Query query={getNotes}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>{error.message}</p>;
                    console.log(data);
                    return (
                        <>
                        { data.getNotes.map(
                            n => {
                                    return (
                                        <Note key={n.id} notes = {n}/>
                                    )
                            }
                        )
                        }
                        <AddNote notes = {n}/>

                        </>
                    );
                }}
                </Query>
    

            </s.Measurement>

            <Mutation
                mutation={deleteAllNotes}
                refetchQueries={() => [{ query: getNotes }]}
            >
                {(deleteAllNotes) => (
  
                        <Button onClick={deleteAllNotes} type="submit">Delete All Notes</Button>
                )}
            </Mutation>
        </s.Container>
    );
};

export default Protected(Notes);