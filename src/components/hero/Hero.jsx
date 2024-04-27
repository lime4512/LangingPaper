import styles from './hero.module.scss'
import { Container } from '../container/Container'
import { GlobBtn } from '../globBtn/GlobBtn'
export const Hero = () => {
	return (
		<Container>
			<div className={styles.hero}>
				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>Простые вещи. Из бумаги</h1>
					<p className={styles.heroText}>
						Бума́га (предположительно от итал. bombagia, первоисточником же
						считается иранский) — волокнистый материал с минеральными добавками.{' '}
					</p>
					<GlobBtn>Каталог</GlobBtn>
				</div>

				<div className={styles.heroImg} />
			</div>
		</Container>
	)
}
