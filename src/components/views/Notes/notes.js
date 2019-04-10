import React from "react";
import { Mutation } from "react-apollo";
import { Card, CardTitle, CardBody } from "reactstrap";
import gql from "graphql-tag";
import * as s from "./styles.js";
import datefns from "date-fns";
import EditNotes from "./editNotes";

const getNotes = gql`
	{
		getNotes {
			createdAt
			note
			id
		}
	}
`;

const deleteNote = gql`
	mutation DeleteNote($noteId: ID!) {
		deleteNote(noteId: $noteId) {
			id
		}
	}
`;

const Note = ({ notes }) => {
	const m = notes;
	return (
		<Card>
			<Mutation
				mutation={deleteNote}
				refetchQueries={() => [{ query: getNotes }]}
			>
				{(deleteNote, { data }) => {
					return (
						<s.DeleteButton
							onClick={() => deleteNote({ variables: { noteId: m.id } })}
						>
							X
						</s.DeleteButton>
					);
				}}
			</Mutation>
			<EditNotes notes={m}>Update</EditNotes>

			<CardTitle>
				{datefns.format(m.createdAt, "ddd, Do MMM YYYY h:mm a")}
			</CardTitle>
			<CardBody>
				{console.log(m)}
				{m.note}
			</CardBody>
		</Card>
	);
};

export default Note;
