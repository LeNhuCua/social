import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/dark.scss";
import { Suspense, useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./index.css";
import DefaulLayout from "./layout/DefaulLayout";
function App() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Suspense>
  
                        <Routes>
                     

                            <Route
                                path="/*"
                                exact
                                name="Trang chủ"
                                element={<DefaulLayout />}
                            />
                  
                

              
                        </Routes>
             
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
