import {  Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SideMenue from "./components/SideMenue"; 
import Prudacts from "./pages/Prudacts";
import People from "./pages/People";
import List from "./pages/List";
import PeopleDetail from "./pages/PeopleDetail";
import PeopleCreatePage from "./pages/PeopleCreatePage";
import PeopleCreateByState from "./pages/PeopleCreateByState";
import Register from "./pages/Register"
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="flex ">
      <SideMenue />
      <Toaster position="top-center"/>

      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="*"
          element={
            <div>
              <p>404</p>{" "}
              <p>
                Oopsss! <p>Not found</p>
              </p>
            </div>
          }
        />
        <Route path="/about">
          <Route index element={<AboutPage />}></Route>
          <Route path="golabi" element={<div>golabi page</div>} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/prudacts">
          <Route index element={<Prudacts />} />
          <Route path="list" element={<List />} />
          <Route path=":p" element={<Prudacts />} />
          <Route path="choghondar" element={<div>choghondr fruties</div>} />
        </Route>

        {/* people pag */}

        <Route path="/people">
          <Route index element={<People />} />
          <Route path=":id" element={<PeopleDetail />} />
          <Route path="new" element={<PeopleCreatePage />} />
          <Route path="register" element={<Register />} />
          <Route path="new-state-form-data" element={<PeopleCreateByState/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
