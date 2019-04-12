import React, { useState} from "react";
import * as s from "../styles.js";
import { Form, FormGroup, Label, Input, Button, Modal } from "reactstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const getBodyMeasurements = gql`
	{
		getBodyMeasurements {
			id
			createdAt
			hips
			waist
			leftArm
			rightArm
			leftLeg
			rightLeg
		}
	}
`;

const editBodyMeasurement = gql`
	mutation EditBodyMeasurement(
            $id: ID!
			$hips:Float
			$waist:Float
			$leftArm:Float
			$rightArm:Float
			$leftLeg:Float
			$rightLeg:Float
    ) {
		editBodyMeasurement(id:$id hips: $hips waist:$waist leftArm:$leftArm rightArm:$rightArm leftLeg:$leftLeg rightLeg:$rightLeg) {
            id
            hips
			waist
			leftArm
			rightArm
			leftLeg
			rightLeg
		}
	}
`;

const EditBodyMeasurement = ({measurement} ) => {
    const [toggle, setState] = useState(false); 
	const [hips, setHips] = useState(0);
	const [waist, setWaist] = useState(0);
    const [leftArm, setLeftArm] = useState(0);
    const [rightArm, setRightArm] = useState(0);
	const [leftLeg, setLeftLeg] = useState(0);
	const [rightLeg, setRightLeg] = useState(0);

	const Toggle = () => {
		setState(!toggle);
		console.log(toggle);
    };
    const SubmitForm = (e, editBodyMeasurement) => {
        e.preventDefault();
        editBodyMeasurement({ variables: {id:measurement.id, hips, waist, leftArm, rightArm, leftLeg, rightLeg}})
    }
    return(
        <>

            <s.UpdateButton onClick={Toggle}>
            <i class="fas fa-edit"></i>
            </s.UpdateButton>

            <Mutation
                mutation={editBodyMeasurement}
                refetchQueries={() => [{ query: getBodyMeasurements }]}
            >
                {(editBodyMeasurement) => (
                <Modal isOpen={toggle}>
                    <s.DeleteButton onClick={Toggle}>x
                    </s.DeleteButton>
                    <Form onSubmit={e => SubmitForm(e, editBodyMeasurement)}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">hips</Label>
                            <Input type="number" value={hips} onChange={e => setHips(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">waist</Label>
                            <Input type="number" value={waist} onChange={e => setWaist(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">leftArm</Label>
                            <Input type="number" value={leftArm} onChange={e => setLeftArm(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">rightArm</Label>
                            <Input type="number" value={rightArm} onChange={e => setRightArm(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">leftLeg</Label>
                            <Input type="number" value={leftLeg} onChange={e => setLeftLeg(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">rightLeg</Label>
                            <Input type="number" value={rightLeg} onChange={e => setRightLeg(Number(e.target.value))}/>
                        </FormGroup>
                        <Button onClick={Toggle} type="submit">Submit</Button>


                    </Form>
                </Modal>
                )}
            </Mutation>
        </>
    )
}

export default EditBodyMeasurement;