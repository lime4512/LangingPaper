import styles from './navigation.module.scss'

export const Navigation = () => {
	const navItem = ['Продукция', 'Материалы', 'О нас', 'Контакты']
	return (
		<nav>
			<ul className={styles.navList}>
				{navItem.map(item => (
					<li key={Math.random()}>
						<a href='#' >{item}</a>
					</li>
				))}
				<li className={styles.navImg}>
					<a href='#'>
						<img src='/Search.png' alt='search' />
					</a>
					<a href='#'>
						<img src='/log_in.png' alt='login' />
					</a>
				</li>
			</ul>
		</nav>
	)
}
