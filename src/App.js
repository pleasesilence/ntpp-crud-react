import React, {StrictMode} from "react";
import Notes from "./pages/Notes/Notes";
import {BrowserRouter, Routes, Route} from 'react-router';
import SideBar from "./components/SideBar/SideBar";
import Welcome from "./pages/Welcome/Welcome";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<SideBar></SideBar>}>
                        <Route path='home' element={<Notes></Notes>}/>
                        <Route path='welcome' element={<Welcome></Welcome>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App;