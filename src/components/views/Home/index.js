import React from "react";
import * as s from "./styles";
import Protected from "../../Protected";

const Home = props => {
	return <s.Container>Home Page</s.Container>;
};

export default Protected(Home);
