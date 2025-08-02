import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import NotesPage from "../../pages/NotesPage/NotesPage";
import NotePageId from "../../pages/NotePageId/NotePageId";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index exact path='/notes' element={<NotesPage/>}></Route>
                <Route path='/settings'>
                    <Route path='/settings/appearance' element={<SettingsPage/>}></Route>
                    <Route path='/settings/statistics' element={<SettingsPage/>}></Route>
                </Route>
                <Route exact path='/notes/:id' element={<NotePageId/>}></Route>
                <Route path='*' element={<Navigate to='/notes'></Navigate>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;