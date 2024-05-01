import styles from './sketchbook.module.scss'
import { Container } from '../container/Container'
import { GlobBtn } from '../globBtn/GlobBtn'
export const Sketchbook = () => {
	return (
		<div className={styles.sketch_container}>
			<Container>
				<div className={styles.sketch_content}>
					<div className={styles.sketch_total_text}>
						<p className={styles.sketch_title}>Simple скетчбук</p>
						<p className={styles.sketch_text}>
							80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и
							для графики и для акварели. Для самых смелых творческих замыслов!
						</p>
						<GlobBtn>Купить</GlobBtn>
					</div>
					<img src='/pic.png' alt='' />
				</div>
			</Container>
		</div>
	)
}
