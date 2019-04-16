//This function allows only inputs of digits 0-9, and utility keys for form navigation/deletion/entering.
export const numberOnlyInput = e => {
	if (
		e.key === "Backspace" ||
		e.key === "ArrowLeft" ||
		e.key === "ArrowRight" ||
		e.key === "Delete" ||
		e.key === "Tab" ||
		e.key === "Enter"
	)
		return;
	if (!/\d/.test(e.key) && e.Key !== "Backspace") {
		e.preventDefault();
		return false;
	}
};
