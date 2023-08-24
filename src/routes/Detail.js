import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json.data.movie);
		setMovie(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div className={styles.loader}>
			{loading ? (
				<h1>Loading . . .</h1>
			) : (
				<div>
					<MovieDetail
						year={movie.year}
						title={movie.title}
						description={movie.description_full}
						coverImg={movie.medium_cover_image}
					/>
				</div>
			)}
		</div>
	);
}

export default Detail;
