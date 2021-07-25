import React, { useEffect, useState, lazy, Suspense } from 'react'
import Dashboard from './mernComponents/backend/Dashboard/Dashboard';
import PostEdit from './mernComponents/backend/Dashboard/DashComponents/Posts/PostEdit';
import { ThemeInit, getActiveTheme } from './mernmodules/ConfigsInit';
import { getMenuPages } from './mernmodules/DashMenuPages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './mernComponents/backend/Dashboard/NavBar';
import LoginPage from './mernComponents/auth/LoginPage';
import RegisterPage from './mernComponents/auth/RegisterPage';
import { PrivateRoute } from './mernComponents/backend/redux/components/PrivateRoute';
function App() {
    const [ActiveTheme, SetActiveTheme] = useState();
    const ThemeActiveComponent = lazy(() => import(`./Themes/${ActiveTheme}/App`));
    const [NoneActive, setNonActive] = useState(false);
    useEffect(() => {
        const Menus = async () => {
            const data = await getMenuPages();
            console.log(data);
        }
        const InitFunc = async () => {
            await ThemeInit();
        }
        //Get Active Theme
        const ThemeActive = async () => {
            const themed = await getActiveTheme();
            if (themed.success) {
                SetActiveTheme(themed.activeTheme.name);
            } else {
                setNonActive(true);
            }

        }
        ThemeActive();
        Menus();
        InitFunc();
    }, []);

    return (
        <div>
            {console.log(ActiveTheme)}
            <Router>
                <Suspense fallback={<div>Page is Loading...</div>}>
                    <Switch>
                        <Route exact path="/admin/:menu_slug">  <Dashboard /></Route>
                        {ActiveTheme ? <Route exact path="/"><ThemeActiveComponent /></Route> : "LOADING MAIN THEME"}
                        <PrivateRoute exact path="/hello" component={Hello} />
                        <PrivateRoute exact path="/admin/post/update/:post_id" component={PostEdit} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register">  <RegisterPage /></Route>
                        <Route exact path="*" render={()=><>
                        <div>PAGE NOT FOUND........</div>
                        </>} />
                    </Switch>
                </Suspense>
            </Router>


        </div>
    )
}

export default App;
