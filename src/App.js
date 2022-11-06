
import './App.css';
import Header from './components/Header';
import About from './components/About'
import Bread from './components/Bread';

import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Drinks from './components/Drinks';
import Events from './components/Events';
import Faqs from './components/Faqs';
import Frozen from './components/Frozen';
import Household from './components/Household';
import Kitchen from './components/Kitchen';
import Login from './components/Login';
import Mail from './components/Mail';
import Main from './components/Main';
import Payment from './components/Payment';
import Pet from './components/Pet'
import Privacy from './components/Privacy';
import Products from './components/Products';
import Services from './components/Services';
import Shortcodes from './components/Shortcodes';
import Single from './components/Single';
import Vegetables from './components/Vegetables';

function App() {
  return (
    <div className="App">
       <Header/>
      
     
       <Router>
      <Routes>
      <Route path="/" element={<Main/>} />
        <Route path="about" element={<About/>} />
      <Route path="bread" element={<Bread/>} />
      <Route path="checkout" element={<Checkout/>} />
      <Route path="drinks" element={<Drinks/>} />
      <Route path="events" element={<Events/>} />
      <Route path="faqs" element={<Faqs/>} />
      <Route path="frozen" element={<Frozen/>} />
      <Route path="household" element={<Household/>} />
      <Route path="kitchen" element={<Kitchen/>} />
      <Route path="login" element={<Login/>} />
      <Route path="mail" element={<Mail/>} />
      <Route path="payment" element={<Payment/>} />
      <Route path="pet" element={<Pet/>} />
      <Route path="privacy" element={<Privacy/>} />
      <Route path="products" element={<Products/>} />
      <Route path="services" element={<Services/>} />
      <Route path="shortcodes" element={<Shortcodes/>} />
      <Route path="single" element={<Single/>} />
      <Route path="vegetables" element={<Vegetables/>} /> 
  
      </Routes>
      </Router> 
       <Newsletter/>
      <Footer/> 
   </div>
  );
}

export default App;



// import './App.css';
// import Header from './components/Header';
// // import About from './components/About';

// // import Checkout from './components/Checkout';
// // import Drinks from './components/Drinks';
// // import Events from './components/Events';
// // import Faqs from './components/Faqs';
// // import Frozen from './components/Frozen';
// // import Household from '.components/Household';
// // import Kitchen from './components/Kitchen';
// // import Login from './components/Login';
// // import Mail from './components/Mail';
// // import Payment from './components/Payment';
// // import Pet from './components/Pet';
// // import Privacy from './components/Privacy';
// // import Products from './components/Products';
// // import Services from './components/Services';
// // import Shortcodes from './components/Shortcodes';
// // import Single from './components/Single';
// // import Footer from './components/Footer';
// // import Newsletter from './components/Newsletter';
// // import { BrowserRouter as Router,
// //   Routes,
// //   Route } from 'react-router-dom';


// //import Vegetables from './components/Vegetables';
// //import Bread from './components/Bread';
// function App (){
//   return(
//     <div className="App">
      
//       <Header />
     
     
     
      
//       {/* <Router>
//         {/* <Routes>
//           <Route path="about" element={<About />} />
//           <Route path="vegetables" element={<Vegetables />}/>
//         </Routes>
//       </Router> */} 
      
      
      
//     </div>
//   )
// }

// export default App;

// import './App.css';
// import Example from './components/Example';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Newsletter from './components/Newsletter';
// function App() {
//   return(
//     <div className='App'>
//       <Header/>
//       <Example/>

//       <Newsletter/>

//       <Footer/>
//     </div>
//   )
// }

// export default App;