import styles from './hero.module.scss'

export const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.heroContent}>
				<h1 className={styles.heroTitle}>Простые вещи. Из бумаги</h1>
				<p className={styles.heroText}>
					Бума́га (предположительно от итал. bombagia, первоисточником же
					считается иранский) — волокнистый материал с минеральными добавками.{' '}
				</p>
				<button className={styles.heroBtn}>Каталог</button>
			</div>

			<img src='/heroImg.png' alt='totalImg' className={styles.heroImg} />
		</div>
	)
}
