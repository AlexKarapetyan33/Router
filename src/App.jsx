import { Routes, Route } from "react-router"
import { Header } from "./components/Header/Header"
import { Posts } from "./components/Posts/Posts"
import { Comments } from "./components/Comments/Comments"


export const App = (props) => {
  return (
    <>
        <Header />

        <Routes>
          <Route path="/" element={<Posts posts={props.posts}/>}/>
          <Route path="/comments" element={<Comments comments={props.comments}/>}/>
        </Routes>
    </>
  )
}
