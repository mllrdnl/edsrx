import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

import { App } from "./App";

import { RegisterUser } from "./Components/register";
import { LoginUser } from "./front/pages/LoginUser";

// import { SecurePage } from "./Components/SecurePage";
import { SecuredRoute } from "./Components/SecuredRoute";

function Layout() {
    const basename = process.env.BASENAME || "";

    return (
        <div className="container">
            <BrowserRouter basename={basename}>
            <Fragment>
                <ScrollToTop>
                    <Routes>
                        <Route exact path="/" element={<SecuredRoute/>}>
                            <Route exact path="/" element={<App/>}/>                           
                        </Route>

                        <Route exact path="/register" element={<RegisterUser/>}>
                        </Route>

                        <Route exact path="/login" element={<LoginUser/>}>
                        </Route>

                        {/* <Route>
                            <h1>Not found!</h1>
                        </Route> */}
                    </Routes>
                </ScrollToTop>
                </Fragment>
            </BrowserRouter>

        </div>
    );
};

export default Layout;