import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./front/components/ScrollToTop";

import { App } from "./App";

// import { RegisterUser } from "./Components/register";
import { LoginUser } from "./front/pages/LoginUser";

// import { SecurePage } from "./components/SecurePage";
import { SecuredRoute } from "./front/components/SecuredRoute";
import { NewRx } from "./front/pages/newrx";

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

                        {/* <Route exact path="/register" element={<RegisterUser/>}>
                        </Route> */}

                        <Route exact path="/login" element={<LoginUser/>}>
                        </Route>

                        <Route exact path="/newrx" element={<NewRx/>}>
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