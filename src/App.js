import React, { useEffect } from 'react'
import Dashboard from './mernComponents/backend/Dashboard/Dashboard';
import { ThemeInit } from './mernmodules/ConfigsInit';
import { getMenuPages } from './mernmodules/DashMenuPages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ActiveTheme from './Themes/eShop/App';
import Hello from './mernComponents/backend/Dashboard/NavBar';
import LoginPage from './mernComponents/auth/LoginPage';
import RegisterPage from './mernComponents/auth/RegisterPage';
function App() {

    useEffect(() => {
        const Menus = async () => {
            const data = await getMenuPages();
            console.log(data);
        }
        const InitFunc = async () => {
            await ThemeInit();
        }
        Menus();
        InitFunc();
    }, []);

    return (
        <div>
            <Router>
                <Route exact path="/admin/:menu_slug">  <Dashboard /></Route>
                <Route exact path="/">  <ActiveTheme /></Route>
                <Route exact path="/hello">  <Hello /></Route>
                <Route exact path="/login">  <LoginPage /></Route>
                <Route exact path="/register">  <RegisterPage /></Route>
            </Router>


        </div>
    )
}

export default App;
