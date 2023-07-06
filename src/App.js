import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PageNotFound from "./components/page-not-found";
import Header from "./components/header";
import Posts from "./components/posts";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import Cards from "./components/cards";
import Gallery from "./components/gallery";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/users/:userid/posts" element={<Posts />} />
          <Route path="/users/:userid/posts/:postid" element={<Post />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
