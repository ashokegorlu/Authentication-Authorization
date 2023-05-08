import AllProductsSection from '../AllProductsSection'
import primeDealsSection from '../PrimeDealsSection'
import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <primeDealsSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products
