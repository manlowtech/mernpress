import React, { useEffect, useState, lazy, Suspense } from 'react'
import {createBrowserHistory} from 'history'
const Dashboard = lazy(()=>import('./mernComponents/backend/Dashboard/Dashboard'))
const PostEdit = lazy(()=>import('./mernComponents/backend/Dashboard/DashComponents/Posts/PostEdit'))
const LoginPage = lazy(()=>import('./mernComponents/auth/LoginPage'))
const RegisterPage = lazy(()=>import('./mernComponents/auth/RegisterPage'))
//import Dashboard from './mernComponents/backend/Dashboard/Dashboard';
//import PostEdit from './mernComponents/backend/Dashboard/DashComponents/Posts/PostEdit';
import { ThemeInit, getActiveTheme,getMenuPages } from './mernmodules';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Hello from './mernComponents/backend/Dashboard/NavBar';
//import LoginPage from './mernComponents/auth/LoginPage';
//import RegisterPage from './mernComponents/auth/RegisterPage';
import { PrivateRoute } from './mernComponents/backend/redux/components/PrivateRoute';
//import {Editor} from 'react-draft-wysiwyg'
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Vue from 'vue'
import {VuePlugin} from 'vuera'
Vue.use(VuePlugin)
const history = createBrowserHistory()
function App() {
    const [ActiveTheme, SetActiveTheme] = useState();
    const ThemeActiveComponent = lazy(() => import(`./Themes/${ActiveTheme}/App`));
    const [NoneActive, setNonActive] = useState(false);
    useEffect(() => {
        const Menus = async () => {
            //to transfer
            const data = await getMenuPages();
            console.log(data);
        }
        const InitFunc = async () => {
            //to transfer
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
            <Router history={history} >
                <Suspense fallback={<div>Page is Loading...</div>}>
                    <Switch>
                        <Route exact path="/admin/:menu_slug">  <Dashboard /></Route>
                        {ActiveTheme ? <Route exact path="/"><ThemeActiveComponent /></Route> : "LOADING MAIN THEME"}
                        <PrivateRoute exact path="/hello" component={Hello} />
                        <PrivateRoute exact path="/admin/post/update/:post_id" component={PostEdit} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register">  <RegisterPage /></Route>
                        <Route exact path="*" render={()=><>
                        <div>Loading as for now</div>
                        </>} />
                    </Switch>
                </Suspense>
            </Router>


        </div>
    )
}

export default App;
