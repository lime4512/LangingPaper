import styles from './Product.module.scss'
import { Container } from '../container/Container'
import { ProductItem } from './ProductItem'
export const ProductList = () => {
	const ProductData = [
		{
			img: '/produc_1.jpg',
			title: 'Упаковки',
			count: 50,
			url: '#',
			text: 'Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.',
		},
		{
			img: '/produc_2.jpg',
			title: 'Пакеты',
			count: 400,
			url: '#',
			text: 'С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.',
		},
		{
			img: '/produc_3.jpg',
			title: 'Кейсы',
			count: 10,
			url: '#',
			text: 'Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.',
		},
		{
			img: '/produc_4.jpg',
			title: 'Другие изделия',
			count: 150,
			url: '#',
			text: 'Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.',
		},
	]
	return (
		<div className={styles.product_content}>
			<Container>
				<ul className={styles.product_list}>
					{ProductData.map(item => (
						<ProductItem
							key={item.title}
							img={item.img}
							text={item.text}
							utl={item.url}
							title={item.title}
							count={item.count}
						/>
					))}
				</ul>
			</Container>
		</div>
	)
}
