import { Navigation } from '../navigation/Navigation'
import { Container } from '../container/Container'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<header className={styles}>
			<Container>
				<div className={styles.headerContent}>
					<img src='/Header-Img.svg' alt='' />
					<Navigation />
				</div>
			</Container>
		</header>
	)
}
