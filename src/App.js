import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PageNotFound from "./components/page-not-found";

import Header from "./components/header";
import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/posts/:userid" element={<Posts />} />
          <Route path="/posts/post/:postid" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
