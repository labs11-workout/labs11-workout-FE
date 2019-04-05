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

const editNote = gql`
    mutation EditNote(
        $note: String!
        $noteId: ID!
        ) {
        editNote(note: $note noteId:$noteId){
        id
        note
        }
      }
    
`;

const EditNotes = ({notes}) => {
    const m = notes;
    const [toggle, setState] = useState(false); 
	const [note, setNote] = useState("");
	const Toggle = () => {
		setState(!toggle);
		console.log(toggle)
    };
    const SubmitForm = (e, editNote) => {
        e.preventDefault();
        editNote({ variables: {noteId:m.id, note}})
    }
    return(
        <>

            <s.UpdateButton onClick={Toggle}>
            Update
            </s.UpdateButton>

            <Mutation
                mutation={editNote}
                refetchQueries={() => [{ query: getNotes }]}
            >
                {(editNote) => (
                <Modal isOpen={toggle}>
                    <s.DeleteButton onClick={Toggle}>x
                    </s.DeleteButton>
                    <Form onSubmit={e => SubmitForm(e, editNote)}>
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

export default EditNotes;