import { BranList } from './components/brandList/BrandList'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

import { Hero } from './components/hero/Hero'
import { ProductList } from './components/product/ProductList'
import { Sketchbook } from './components/sketchbook/Sketchbook'
import { WhiteContent } from './components/whiteContent/WhiteContent'

function App() {
	return (
		<>
			<Header />
			<Hero />
			<WhiteContent />
			<ProductList />
			<BranList />
			<Sketchbook />
			<Footer />
		</>
	)
}

export default App
