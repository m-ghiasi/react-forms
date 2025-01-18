import { Routes, Route, Outlet, Form } from "react-router";
import "./App.css";
import SideMenue from "./compoents/SideMenue";
import HomePage from "./pages/Home";
import Contacts from "./pages/Contacts";
import FormPage from "./pages/Form";

function App() {
  return <div className="flex gap-2 h-full">
    <SideMenue/>

<Routes>
  <Route index element={<HomePage/>} />
  <Route path="Home" element={<HomePage/>} />
  <Route path="contact" element={<Contacts/>} />
  <Route path="Form" element={<FormPage/>} />
</Routes>

  </div>;
}

export default App;
