import styles from './brand.module.scss'
import { Container } from '../container/Container'

export const BranList = () => {
	const brandData = [
		'/brand_1.png',
		'/brand_2.png',
		'/brand_3.png',
		'/brand_4.png',
	]
	return (
		<div className={styles.brand_content}>
			<Container>
				<ul className={styles.brand_list}>
					{brandData.map(item => (
						<li key={Math.random()} className={styles.brand_item}>
							<img src={item} alt='' />
						</li>
					))}
				</ul>
			</Container>
		</div>
	)
}
