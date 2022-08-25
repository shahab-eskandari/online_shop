import {Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Home} from './pages/Home'; 
import {CategoryOne} from './pages/Category-one'; 
import {CategoryTwo} from './pages/Ctegory-two';
import {Navbar} from './components/Navbar';
import {CartContextProvider} from './context/cardContext' 

function App() {
  return (
    <CartContextProvider>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cat1' element= {<CategoryOne/>}/>
          <Route path='/cat2' element={<CategoryTwo/>}/>
        </Routes>
      </Container>
    </CartContextProvider>
  )
}

export default App
