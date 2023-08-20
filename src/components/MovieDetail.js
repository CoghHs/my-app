import { Link } from "react-router-dom";

function MovieDetail({ coverImg, title, description, year }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>{title}</h2>
			<h3>{year}</h3>
			<h4>description</h4>
			<p>{description}</p>
			<hr />
			<Link to="/">Go to the Movie List &rarr;</Link>
		</div>
	);
}

export default MovieDetail;
