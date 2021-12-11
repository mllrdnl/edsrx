import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../store/auth";

export function SecuredRoute() {
    const auth = useAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />;
}