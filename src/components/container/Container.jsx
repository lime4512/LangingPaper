export const Container = ({ children }) => {
	const style = {
		container: {
			margin: '0 150px',
			padding: '0 15px',
		},
	}

	return <div style={style.container}>{children}</div>
}
