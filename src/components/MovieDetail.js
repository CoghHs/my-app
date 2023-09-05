import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({ coverImg, title, description, year }) {
	return (
		<div className={styles.detail__container}>
			<img src={coverImg} alt={title} className={styles.img} />
			<div className={styles.info}>
				<h2>{title}</h2>
				<h5>{year}</h5>
				<span>description ¬</span>
				<p className={styles.descrip}>
					{description.length > 235
						? `${description.slice(0, 235)}...`
						: description}
				</p>
				<hr />
				<Link to="/" className={styles.link}>
					Go to the Movie List &rarr;
				</Link>
			</div>
		</div>
	);
}

export default MovieDetail;
