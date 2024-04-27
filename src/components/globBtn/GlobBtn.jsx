import styles from './globBtn.module.scss'

export const GlobBtn = ({ children }) => {
	return <button className={styles.Btn}>{children}</button>
}
