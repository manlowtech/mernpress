import React from 'react'
import { Admin,Resource } from "react-admin";
import { createHashHistory } from 'history';
import restProvider from "ra-data-simple-rest";
function Hello(){
    return "Dashboard Ready"
}
const history = createHashHistory();
function AdminTemplate() {
    return (
        <Admin   history={history} dataProvider={restProvider('http://localhost:5000')}>
            <Resource name="posts" create={Hello} />
        </Admin>
    )
}

export default AdminTemplate
