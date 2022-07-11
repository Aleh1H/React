import React from 'react';
import {Link, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import To_dos from "./pages/To_dos";
import Albums from "./pages/Albums";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";

const App = () => {
    return (
        <div>
            <div>
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/to_dos'}>to-dos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>
            </div>
            <div>
            <h2>content</h2>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/to_dos'} element={<To_dos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<Posts/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
            );
            };

            export default App;















