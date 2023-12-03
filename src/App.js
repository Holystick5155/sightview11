import React, { createContext } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import AddPost from "./pages/addpost/AddPost";
import SinglePages from "./components/singlePages/SinglePages";
import Culture from "./pages/category/culture/Culture";
//import AdminPanel from "./admin/AdminPanel"


export const AuthContext = createContext({})

function App() {

  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === "http://localhost:3000/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >

      <Navbar />

      <Routes>

        <Route
          exact path="/"
          element={<Home />}
        />
        {!user && (
          <Route
            path="/auth"
            element={<Auth />}
          />
        )}

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/culture"
          element={<Culture />}
        />

        <Route path={"/posts/:id"} element={<SinglePages />} />


        <Route
          path="/addpost"
          element={user ? <AddPost /> : <Navigate to="../home" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* <Route
          path="/admin"
          element={<AdminPanel />}
        /> */}

      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
