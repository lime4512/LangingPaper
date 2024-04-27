import styles from './whiteContent.module.scss'
import { Container } from '../container/Container'
import { WhiteList } from '../whiteList/WhiteList'
export const WhiteContent = () => {
	return (
		<div className={styles.whiteContainer}>
			<Container>
				<WhiteList />

				<div className={styles.White_Content}>
					<img src='/Folderv8Open1.png' alt='png' />
					<div className={styles.total_Texts}>
						<h2 className={styles.texts_title}>Максимальная белизна</h2>
						<p className={styles.texts_text}>
							Для повышения белизны, гладкости и мягкости в состав бумажной
							массы вводят белые минеральные вещества: мел, тальк, каолин и др.
							Эта операция называется наполнением.
						</p>
						<p className={styles.texts_text}>
							Отлив бумажного листа осуществляют на бумагоделательной машине,
							важнейшей частью которой является непрерывно движущаяся (как
							транспортер) металлическая или капроновая сетка.
						</p>
					</div>
				</div>
			</Container>
		</div>
	)
}
