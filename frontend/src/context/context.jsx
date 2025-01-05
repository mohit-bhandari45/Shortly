import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [pageLoading, setPageLoading] = React.useState(true);

    return <AppContext.Provider value={{ pageLoading, setPageLoading }}>
        {children}
    </AppContext.Provider>
}