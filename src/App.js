import React from 'react'
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components//Pages/Home';
import Distribution from './Components//Pages/Distribution';
import TradeContract from './Components/Pages/TradeContract';
import Products from './Components/Pages/Products'
import ScrollToTop from './Components/ScrollToTop'
import MasalatProduct from './Components/Pages/MasalaProduct';
import SpicesProduct from './Components/Pages/SpicesProduct'
import Groceries from './Components/Pages/Groceries'
function App() {
  return (
    <> 

     <Router>
     <Header />
     <ScrollToTop />
     <Switch>
          <Route path='/' exact component={Home} >
           </Route>

          <Route path='/import_and_distribution' exact component={Distribution} > 
          </Route>
          <Route path='/trading_and_contracting' exact component={TradeContract} > 
          </Route>
          <Route path='/Products' exact component={Products}>
            </Route>
            <Route path='/Masala-Products' exact component={MasalatProduct} >   
            </Route>
            <Route path='/Spices-Products' extact component={SpicesProduct} />
            <Route path='/Groceries-Products' extact component={Groceries} />
        </Switch>
     </Router>
    </>
  )
}

export default App