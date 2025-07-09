

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";


import './style.scss';
import Header from './components/Header';
import TopHeadlines from './components/TopHeader';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import EditPost from "./components/EditPost";
import AboutMe from "./pages/AboutMe";
import SportsNewsCategory from './components/SportsNewsCategory';
import SingleBlogPage from './pages/SingleBlogPage';
import BusinessNewsCategory from './components/BusinessNewsCategory';
import FoodNewsCategory from './components/FoodNewsCategory';
import EntertainmentNewsCategory from './components/EntertainmentNewsCategory';
import PostDetails from "./pages/SingleBlogPage";

const MainLayout = () => {
  return (
    <>
      <Header />
      <TopHeadlines />
      <NewsSection />
      <Outlet/>
      <Footer />

    </>
  );
};

const WriteLayout = () => {
  return (
    <>
      <Header />
      <Write />
      <Footer />
    </>
  );
};

const PostDetailsLayout=()=>{
  return(
    <>
    <Header/>
    <SingleBlogPage/>
    <Footer/>
    </>
  );
};

const EditPostLayout=()=>{
  return(
    <>
    <Header/>
    <EditPost/>
    <Footer/>
    </>
  );
};



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div></div>, // Home placeholder (or add a component)
      },
    ],
  },
  
  {
    path: "/write",
    element: <WriteLayout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/post/:id",        
    element: <PostDetailsLayout />,
  },
  {
    path: "/edit/:id",
    element: <EditPost />,
  },
  {
     path: "aboutme",
     element: <AboutMe />,
  },
  {
    path:"food",
    element:<FoodNewsCategory />
  },
  {
    path:"enter",
    element:<EntertainmentNewsCategory />
  },
  {
    path:"sports",
    element:<SportsNewsCategory />
  },
  {
    path:"business",
    element:<BusinessNewsCategory />
  },

]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;