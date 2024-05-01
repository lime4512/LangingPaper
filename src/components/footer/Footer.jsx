import { Container } from '../container/Container'
import styles from './footer.module.scss'
export const Footer = () => {
	const FooterData = ['/facebook.png', '/x.png', '/inst.png', '/youtube.png']
	return (
		<footer>
			<div className={styles.footer_container}>
				<Container>
					<div className={styles.footer_content}>
						<img src='/footer_img.svg' alt='' />

						<ul className={styles.footer_list}>
							{FooterData.map(item => (
								<li key={Math.random()}>
									<a href='#'>
										<img src={item} alt='img' />
									</a>
								</li>
							))}
						</ul>
					</div>
				</Container>
			</div>
			<div className={styles.footer_content_down}>
				<p className={styles.footer_content_down_text}>
					SIMPLE <span>®</span> 2021
				</p>
			</div>
		</footer>
	)
}
