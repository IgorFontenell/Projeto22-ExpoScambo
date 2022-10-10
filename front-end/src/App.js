import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./Components/ChatPage/ChatPage.js";
import CreatePostPage from "./Components/CreatePostPage/CreatePostPage.js";
import MainPage from "./Components/MainPage/MainPage.js";
import PostPage from "./Components/PostPage/PostPage.js";
import ProfilePage from "./Components/ProfilePage/ProfilePage.js";
import Login from "./Components/UserAuth/Login.js";
import Register from "./Components/UserAuth/Register.js";
import TokenContext from "./contexts/TokenContext.js";
import UserContext from './contexts/UserContext.js'

export default function App() {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    return(
        <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/post/create" element={<CreatePostPage />} />
                    <Route path="/chat/:courierId" element={<ChatPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </TokenContext.Provider>
    );

}