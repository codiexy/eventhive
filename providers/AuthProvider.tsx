"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthUser {
    id: string;
    email?: string;
    [key: string]: any;
}

interface AuthContextType {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoadingAuth: boolean;
    isLoadingPublicSettings: boolean;
    authError: { type: string; message: string } | null;
    appPublicSettings: any;
    logout: (shouldRedirect?: boolean) => void;
    navigateToLogin: () => void;
    checkAppState: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(false);
    const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
    const [authError, setAuthError] = useState<{ type: string; message: string } | null>(null);
    const [appPublicSettings, setAppPublicSettings] = useState<any>({
        id: "mock-app-id",
        public_settings: {}
    });

    useEffect(() => {
        // Mock authentication: Auto-login with a dummy user
        setUser({ id: "mock-user-id", email: "user@example.com", name: "Mock User" });
        setIsAuthenticated(true);
    }, []);

    const checkAppState = async () => {
        // Mock app state check
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const navigateToLogin = () => {
        // Mock login redirection
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            isLoadingAuth,
            isLoadingPublicSettings,
            authError,
            appPublicSettings,
            logout,
            navigateToLogin,
            checkAppState
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
