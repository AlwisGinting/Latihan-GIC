import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const WEBPAGEOne = React.lazy(() => import("pages/WEBPAGEOne"));
const WEBPAGE = React.lazy(() => import("pages/WEBPAGE"));
const WEBPAGETwo = React.lazy(() => import("pages/WEBPAGETwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/webpagetwo" element={<WEBPAGETwo />} />
          <Route path="/webpage" element={<WEBPAGE />} />
          <Route path="/webpageone" element={<WEBPAGEOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
