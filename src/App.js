
import './App.scss';
import React from "react"
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Requests from './pages/Requests/Requests';
import {Content,Theme} from "@carbon/react"
import TutorialHeader from './components/Header/TutorialHeader';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Content>
      <Theme theme='g100'>
      <TutorialHeader />
      </Theme>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/fetch' element={<Requests />} />
    </Routes>
    <Footer />
    </Content>
    
  );
}

export default App;
