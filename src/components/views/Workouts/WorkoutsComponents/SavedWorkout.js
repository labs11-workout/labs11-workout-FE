import React from "react";
import { Card, CardSubtitle } from "reactstrap";
import datefns from "date-fns";
import * as s from "../styles";

const SavedWorkout = ({ workout }) => {
	const w = workout;
	return (
		<s.WorkoutContainer>
			<Card>
				<s.CardHeader>
					Created: {datefns.format(w.createdAt, "ddd, Do MMM YYYY h:mm a")}
				</s.CardHeader>
				<s.CardContent>
					{w.name && (
						<p>
							<strong>{w.name}</strong>
						</p>
					)}
					<CardSubtitle>Exercises</CardSubtitle>
					<hr />
					{w.exercises.map(e => {
						return (
							<Card>
								<s.CardHeader>{e.name}</s.CardHeader>
								<s.CardContent>
									{e.intervals && <p>Intervals: {e.intervals}</p>}
									{e.sets && <p>Sets: {e.sets}</p>}
									{e.reps && <p>Reps: {e.reps}</p>}
									{e.duration && <p>Duration: {e.duration}</p>}
									{e.intensity && <p>Intensity: {e.intensity}</p>}
								</s.CardContent>
							</Card>
						);
					})}
				</s.CardContent>
			</Card>
		</s.WorkoutContainer>
	);
};

export default SavedWorkout;
