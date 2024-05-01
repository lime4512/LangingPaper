import styles from './Product.module.scss'

export const ProductItem = ({ url, text, img, title, count }) => {
	return (
		<li className={styles.product_item}>
			<img src={img} alt='err' className={styles.product_img} />
			<p className={styles.product_title}>{title}</p>
			<span className={styles.product_count}>Тираж: от {count} штук</span>
			<p className={styles.product_text}>{text}</p>
			<a className={styles.product_url} href={url}>
				Подробнее
				<img src='/Arrow.png' alt='er' />
			</a>
		</li>
	)
}
