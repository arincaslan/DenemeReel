import "./App.css";
import FlatDetail from "./components/FlatDetail";
import AddPost from "./components/AddPost";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import Navbar from "./components/Navbar";
import FlatList from "./components/FlatList";
import { auth } from "./components/FireImage";
import CitizenFlatList from "./components/CitizenFlatList";
import CitizenFlatDetail from "./components/CitizenFlatDetail";

function App() {
  const random = auth.config.apiKey;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/blog/:id" component={BlogDetail}></Route>
        <Route path="/flat/:slug" component={FlatDetail}></Route>
        <Route path="/citizenFlat/:slug" component={CitizenFlatDetail}></Route>
        <Route path="/flatList" component={FlatList}></Route>
        <Route path="/addPost" component={AddPost}></Route>
        <Route path="/citizenFlatList" component={CitizenFlatList}></Route>
        <Route path={"/admin/" + random} exact component={Admin}></Route>
        <Route path="/adminLogin">
          <AdminLogin props={random} />
        </Route>

        <a
          href="https://wa.me/9005324699576"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
