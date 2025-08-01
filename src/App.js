import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router';
import NotesPage from './pages/NotesPage/NotesPage';
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<NotesPage/>}></Route>
                    <Route path='/welcome' element={<WelcomePage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;