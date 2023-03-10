import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../screens/dashboard";
import Home from "../screens/home";
import Singlecomments from "../screens/singlecomment";



export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path='/singlecomment/:id'element={<Singlecomments/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
