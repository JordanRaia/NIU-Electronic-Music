import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Page404 from "./Page404/Page404";
import "./Background/Background.css";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Header>Header content</Header>}>
                    <Route path="" element={<Home />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
