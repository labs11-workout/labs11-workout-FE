import React, { useState } from "react";
import * as s from "../styles.js";
import { Form, FormGroup, Label, Input, Button, Modal } from "reactstrap";
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

const addBodyMetric = gql`
	mutation AddBodyMetric($height: Float, $weight: Float, $bodyfat: Float) {
		addBodyMetric(height: $height, weight: $weight, bodyfat: $bodyfat) {
			height
			weight
			bodyfat
		}
	}
`;

const AddBodyMetric = () => {
	const [toggle, setState] = useState(false);
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [bodyfat, setBodyFat] = useState(0);

	const Toggle = () => {
		setState(!toggle);
		console.log(toggle);
	};
	const SubmitForm = (e, addBodyMetric) => {
		e.preventDefault();
		addBodyMetric({ variables: { height, bodyfat, weight } });
	};
	return (
		<s.Container>
			<Button onClick={Toggle} color="primary">Add Body Metric</Button>

			<Mutation
				mutation={addBodyMetric}
				refetchQueries={() => [{ query: getBodyMetrics }]}
			>
				{addBodyMetric => (
					<Modal isOpen={toggle}>
						<s.DeleteButton onClick={Toggle}>x</s.DeleteButton>
						<Form onSubmit={e => SubmitForm(e, addBodyMetric)}>
							<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
								<Label for="exampleEmail" className="mr-sm-2">
									Weight
								</Label>
								<Input
									type="number"
									name="email"
									id="exampleEmail"
									value={weight}
									onChange={e => setWeight(Number(e.target.value))}
								/>
							</FormGroup>
							<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
								<Label for="examplePassword" className="mr-sm-2">
									Height
								</Label>
								<Input
									type="number"
									name="password"
									id="examplePassword"
									value={height}
									onChange={e => setHeight(Number(e.target.value))}
									placeholder={2}
								/>
							</FormGroup>
							<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
								<Label for="examplePassword" className="mr-sm-2">
									Bodyfat
								</Label>
								<Input
									type="number"
									name="password"
									id="examplePassword"
									value={bodyfat}
									onChange={e => setBodyFat(Number(e.target.value))}
								/>
							</FormGroup>
							<Button onClick={Toggle} type="submit">
								Submit
							</Button>
						</Form>
					</Modal>
				)}
			</Mutation>
		</s.Container>
	);
};

export default AddBodyMetric;
