import app from "./app";
const port = process.env.PORT || "9090";

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`);
});
