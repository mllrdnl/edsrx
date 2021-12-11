import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import PropTypes from "prop-types";

export function SecurePage(props) {
    const auth = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!auth.authToken) {
            navigate.push("/login");
        }
    }, [auth.authToken]);

    return <>{props.children}</>;

}

SecurePage.propTypes = {
    children: PropTypes.element
};