import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Page404 from "./Page404/Page404";
import Synths from "./Synths/Synths";
import Lead from "./Synths/Lead";
import Chords from "./Chords/Chords";
import Drums from "./Drums/Drums";
import "./Background/Background.css";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="" element={<Home />} />
                    <Route path="synths" element={<Synths />} />
                    <Route path="chords" element={<Chords />} />
                    <Route path="drums" element={<Drums />} />
                    <Route path="lead" element={<Lead />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
