import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const LayoutMainUI = () => {
  return (
    <>
      <main>
        <Header></Header>
        <About></About>
      </main>
    </>
  );
};

const LayoutResumeUI = () => {
  return (
    <>
      <main>
        <Header></Header>
        <Resume></Resume>
      </main>
    </>
  );
};

const LayoutPortfolioUI = () => {
  return (
    <>
      <main>
        <Header></Header>
        <Portfolio></Portfolio>
      </main>
    </>
  );
};

const LayoutBlogUI = () => {
  return (
    <>
      <main>
        <Header></Header>
        <Blog></Blog>
      </main>
    </>
  );
};

const LayoutContactUI = () => {
  return (
    <>
      <main>
        <Header></Header>
       <Contact></Contact>
      </main>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMainUI />,
  },
  {
    path: "/resume",
    element: <LayoutResumeUI />,
  },
  {
    path: "/portfolio",
    element: <LayoutPortfolioUI />,
  },
  {
    path: "/blog",
    element: <LayoutBlogUI />,
  },
  {
    path: "/contact",
    element: <LayoutContactUI />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#wrapper"));
root.render(<RouterProvider router={appRouter} />);
