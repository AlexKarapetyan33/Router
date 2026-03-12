import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import { posts, comments, albums, photos } from "./db"
import './index.css'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App posts={posts} comments={comments} albums={albums} photos={photos}/>
  </BrowserRouter>
)
