 
import './App.css'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './assets/component/Home/Home' 
import Quill from './assets/component/Quill/Quill'
import AllBlogRenderer from './assets/component/AllBlog/AllBlogRender'
import FullBlog from './assets/FullBlog/FullBlog'
import Layout from './Layout'
 import Auth from './assets/component/UserSingup/Auth'
function App() {
 
  return (
    <> 
     <BrowserRouter>
               <Routes>
                 <Route path="/" element={<Layout/>}>
                   <Route index element={<Home/>} ></Route>
                   <Route path='/writeBlog' element={<Quill/>} ></Route>
                   <Route path='/blogs' element={<AllBlogRenderer/>} ></Route>
                   <Route path='/fullBlog/:id' element={<FullBlog/>} ></Route>
                </Route>
                <Route path='/authentication' element={<Auth/>} ></Route>

               </Routes>
            </BrowserRouter>
       
    </>
  )
}

export default App
