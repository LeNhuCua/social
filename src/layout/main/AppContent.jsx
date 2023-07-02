import React, { Suspense } from "react";

import "./feed.scss";
import { Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";

const AppContent = () => {
    return (
        <div className="feed">
            <div className="feedWrapper bg-[#F0F2F5]">
                <Suspense >
                    <Routes>
                        {routes.map((route, idx) => {
                            return (
                                route.element && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        element={<route.element />}
                                    />
                                )
                            );
                        })}
                        {/* <Route
            path="/quantri"
            element={<Navigate to="dashboard" replace />}
          /> */}
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default AppContent;
