import React, { useState} from "react";
import * as s from "../styles.js";
import { FormGroup, Label, Input, Button, Modal, ModalHeader } from "reactstrap";
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

const addBodyMeasurement = gql`
	mutation AddBodyMeasurement(
			$hips:Float
			$waist:Float
			$leftArm:Float
			$rightArm:Float
			$leftLeg:Float
			$rightLeg:Float
    ) {
		addBodyMeasurement(hips: $hips waist:$waist leftArm:$leftArm rightArm:$rightArm leftLeg:$leftLeg rightLeg:$rightLeg) {
            hips
			waist
			leftArm
			rightArm
			leftLeg
			rightLeg
		}
	}
`;

const AddBodyMeasurement = ( ) => {
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
    const SubmitForm = (e, addBodyMeasurement) => {
        e.preventDefault();
        addBodyMeasurement({ variables: {hips, waist, leftArm, rightArm, leftLeg, rightLeg}})
    }
    return(
        <s.Container>

            <s.AddButton onClick={Toggle} color="primary">
            Add Body Measurement
            </s.AddButton>

            <Mutation
                mutation={addBodyMeasurement}
                refetchQueries={() => [{ query: getBodyMeasurements }]}
            >
                {(addBodyMeasurement) => (
                <Modal isOpen={toggle} centered size='lg'>
                    <ModalHeader>
                        Add Body Measurements
                        <s.DeleteButton onClick={Toggle}><i className="fas fa-times"></i>
                        </s.DeleteButton>
                    </ModalHeader>
                    <s.CreationForm onSubmit={e => SubmitForm(e, addBodyMeasurement)}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="exampleEmail" className="mr-sm-2">Hips</Label>
                            <Input type="number" min="0" value={hips} onChange={e => setHips(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="examplePassword" className="mr-sm-2">Waist</Label>
                            <Input type="number" min="0" value={waist} onChange={e => setWaist(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="examplePassword" className="mr-sm-2">Left Arm</Label>
                            <Input type="number" min="0" value={leftArm} onChange={e => setLeftArm(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="exampleEmail" className="mr-sm-2">Right Arm</Label>
                            <Input type="number" min="0" value={rightArm} onChange={e => setRightArm(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="examplePassword" className="mr-sm-2">Left Leg</Label>
                            <Input type="number" min="0" value={leftLeg} onChange={e => setLeftLeg(Number(e.target.value))}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-4">
                            <Label for="examplePassword" className="mr-sm-2">Right Leg</Label>
                            <Input type="number" min="0" value={rightLeg} onChange={e => setRightLeg(Number(e.target.value))}/>
                        </FormGroup>
                        <Button onClick={Toggle} type="submit">Submit</Button>  
                    </s.CreationForm>
                </Modal>
                )}
            </Mutation>
        </s.Container>
    )
}

export default AddBodyMeasurement;