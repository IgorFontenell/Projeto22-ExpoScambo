import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import MainPage from "./Components/MainPage.js";
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";


export default function App () {
    const [user, setUser] = useState(null);

    return (
        
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}