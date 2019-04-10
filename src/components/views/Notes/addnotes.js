import React, { useState} from "react";
import {Query, Mutation, graphql } from 'react-apollo';
import { Button, Card, CardTitle, CardBody, Modal, Form, FormGroup, Label, Input} from 'reactstrap';
import gql from 'graphql-tag';
import * as s from './styles.js'


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
        addNote(note: $note){
        id
        note
        }
      }
    
`;

const AddNotes = (props) => {
    const [toggle, setState] = useState(false); 
	const [note, setNote] = useState("");
	const Toggle = () => {
		setState(!toggle);
		console.log(toggle)
    };
    const SubmitForm = (e, addNote) => {
        e.preventDefault();
        addNote({ variables: { note}})
    }
    return(
        <>

            <Button onClick={Toggle}>
            New Note
            </Button>

            <Mutation
                mutation={addNote}
                refetchQueries={() => [{ query: getNotes }]}
            >
                {(addNote) => (
                <Modal isOpen={toggle}>
                    <s.DeleteButton onClick={Toggle}>x
                    </s.DeleteButton>
                    <Form onSubmit={e => SubmitForm(e, addNote)}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Note</Label>
                            <Input type="text" value={note} onChange={e => setNote(e.target.value)}/>
                        </FormGroup>
                        <Button onClick={Toggle} type="submit">Submit</Button>


                    </Form>
                </Modal>
                )}
            </Mutation>
            </>
    )
};

export default AddNotes;