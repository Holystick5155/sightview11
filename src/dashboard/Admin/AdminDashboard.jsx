import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import UserList from '../users/UserList'
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {
    return (
        <Admin dataProvider={dataProvider} style={{ marginTop: "100px" }}>
            <Resource name="users" list={UserList} />
        </Admin>
    );
}

export default AdminDashboard;
