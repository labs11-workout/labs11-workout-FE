import React from "react";
import {Query, Mutation, graphql } from 'react-apollo';
import { Card, CardTitle, CardBody} from 'reactstrap';
import gql from 'graphql-tag';
import * as s from './styles.js'
import Protected from '../../Protected.js';
import Note from "./notes"
import AddNote from "./addnotes"

const getNotes = gql`
    {
        getNotes{
          createdAt
          note
          id
        }
      }
`;

const addNote = gql`
    mutation AddNote(
        $note: String!
        ) { 
        addNotes(note: $note){
        id
        note
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
        </s.Container>
    );
};

export default Protected(Notes);