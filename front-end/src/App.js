import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage.js";
import Login from "./Components/UserAuth/Login.js";
import Register from "./Components/UserAuth/Register.js";
import UserContext from './contexts/UserContext.js'

export default function App() {
    const [user, setUser] = useState(null);

    return(
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );

}