import { Routes, Route } from "react-router"
import { Header } from "./components/Header/Header"
import { Posts } from "./components/Posts/Posts"
import { Comments } from "./components/Comments/Comments"
import { Albums } from "./components/Albums/Albums"
import { Photos } from "./components/Photos/Photos"


export const App = (props) => {
  return (
    <>
        <Header />

        <Routes>
          <Route path="/" element={<Posts posts={props.posts}/>}/>
          <Route path="/comments" element={<Comments comments={props.comments}/>}/>
          <Route path="/albums" element={<Albums albums={props.albums}/>} />
          <Route path="/photos" element={<Photos photos={props.photos}/>} />
        </Routes>
    </>
  )
}
