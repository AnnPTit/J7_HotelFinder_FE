import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./router";
import DefaultLayout from "../src/components/Layout/DefaultLayout";
function App() {
  // fake login as Admin
  const [admin, setAdmin] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          {!admin &&
            publicRoutes.map((item, index) => {
              const Page = item.component;
              let Layout = DefaultLayout;

              if (item.layout) {
                Layout = item.layout;
              } else if (item.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          {admin &&
            privateRoutes.map((item, index) => {
              const Page = item.component;
              let Layout = DefaultLayout;

              if (item.layout) {
                Layout = item.layout;
              } else if (item.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
