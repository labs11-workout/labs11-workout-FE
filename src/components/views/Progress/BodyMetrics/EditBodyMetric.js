import React, { useState} from "react";
import * as s from "../styles.js";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader } from "reactstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const getBodyMetrics = gql`
	{
		getBodyMetrics {
			id
			createdAt
			weight
			height
			bodyfat
		}
	}
`;

const editBodyMetric = gql`
	mutation EditBodyMetric(
        $id: ID!
        $height: Float
		$weight: Float
		$bodyfat: Float
    ) {
		editBodyMetric(id:$id height:$height weight:$weight bodyfat:$bodyfat) {
			height
			weight
			bodyfat
		}
	}
`;

const EditBodyMetric = ({metric} ) => {
    const [toggle, setState] = useState(false); 
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [bodyfat, setBodyFat] = useState(0);

	const Toggle = () => {
		setState(!toggle);
		console.log(toggle)
    };
    const SubmitForm = (e, editBodyMetric) => {
        e.preventDefault();
        editBodyMetric({ variables: {id:metric.id, height, bodyfat, weight}})
    }
    return(
        <>

            <s.UpdateButton onClick={Toggle}>
            <i class="fas fa-edit"></i>
            </s.UpdateButton>

            <Mutation
                mutation={editBodyMetric}
                refetchQueries={() => [{ query: getBodyMetrics }]}
            >
                {(editBodyMetric) => (
                <Modal isOpen={toggle} centered size='lg'>
                <ModalHeader>
                    Edit Metrics
                    <s.DeleteButton onClick={Toggle}><i className="fas fa-times"></i>
                    </s.DeleteButton>
                </ModalHeader>
                    <s.CreationForm onSubmit={e => SubmitForm(e, editBodyMetric)} centered>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="exampleEmail" className="mr-sm-2">Weight</Label>
                            <Input type="number" min="0" name="email" id="exampleEmail" value={weight} onChange={e => setWeight(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="examplePassword" className="mr-sm-2">Height</Label>
                            <Input type="number" min="0" name="password" id="examplePassword" value={height} onChange={e => setHeight(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="examplePassword" className="mr-sm-2">Bodyfat</Label>
                            <Input type="number" min="0" name="password" id="examplePassword" value={bodyfat} onChange={e => setBodyFat(Number(e.target.value))}/>
                        </FormGroup>
                        <Button onClick={Toggle} type="submit">Submit</Button>


                    </s.CreationForm>
                </Modal>
                )}
            </Mutation>
        </>
    )
}

export default EditBodyMetric;