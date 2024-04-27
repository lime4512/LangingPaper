import styles from './whiteList.module.scss'
export const WhiteItem = ({ img, text, title }) => {
	return (
		<li className={styles.card}>
			<img src={img} alt='' />
			<div className={styles.card_Content}>
				<h4 className={styles.card_title}>{title}</h4>
				<p className={styles.card_text}>{text}</p>
			</div>
		</li>
	)
}
