import Layout from './components/pages/Layout'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
