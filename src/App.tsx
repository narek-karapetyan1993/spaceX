import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Loading from "components/Common/Loading";

const NoMatch = React.lazy(() => import("components/NoMatch"));
const Home = React.lazy(() => import("components/Main/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />

        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <NoMatch />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
