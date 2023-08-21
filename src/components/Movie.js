import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, year }) {
	return (
		<div className={styles.movie__container}>
			<div className={styles.movie}>
				<img src={coverImg} alt={title} className={styles.img} />
				<div className={styles.movie__info}>
					<h2 className={styles.title}>
						<Link to={`/movie/${id}`}>{title}</Link>
					</h2>
					<h4>{year}</h4>
					<p className={styles.summary}>
						{summary.length > 235 ? `${summary.slice(0, 135)}...` : summary}
					</p>
					<ul className={styles.movie__genres}>
						{genres.map((g) => (
							<li key={g}>{g}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
