import { WhiteItem } from './WhiteItem'
import styles from './whiteList.module.scss'
export const WhiteList = () => {
	const WhiteData = [
		{ img: '/Cards_V1.png', text: 'Результат вашего обучения', title: 'V.1' },
		{ img: '/Cards_V2.png', text: 'Результат вашего обучения', title: 'V.2' },
		{ img: '/Cards_V3.png', text: 'Результат вашего обучения', title: 'V.3' },
	]
	return (
		<ul className={styles.whiteList}>
			{WhiteData.map(item => (
				<WhiteItem
					img={item.img}
					text={item.text}
					title={item.title}
					key={item.title}
				/>
			))}
		</ul>
	)
}
