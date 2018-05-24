import Vue from 'vue'
import Router from 'vue-router';
import AuthService from "@/_common/auth.service";

const debug = process.env.NODE_ENV !== 'production';

import Login from '@/components/Login/Login';
import Shared from '@/components/Shared/Shared';
import Home from '@/components/Home';
import settings from '@/components/Settings';
import orderList from '@/components/Order/OrderList';
import importOrder from '@/components/Order/ImportOrder';
import Vuexs from '@/components/Vuexs';
import modal from '@/ui/uiModal';
import icons from '@/ui/uiIcons';
import buttons from '@/ui/uiButtons';
import alertify from '@/ui/uiAlertify';
import table from '@/ui/uiTable';
import list from '@/ui/uiList';
import form from '@/ui/uiForm';


// const Login = r => require.ensure([], () => r(require('./components/Login/Login')), 'Login');
// const Shared = r => require.ensure([], () => r(require('./components/Shared/Shared')), 'Shared');
// const Home = r => require.ensure([], () => r(require('./components/Home')), 'Home');
// const settings = r => require.ensure([], () => r(require('./components/Settings')), 'settings');
// const orderList = r => require.ensure([], () => r(require('./components/Order/OrderList')), 'orderList');
// const importOrder = r => require.ensure([], () => r(require('./components/Order/ImportOrder')), 'importOrder');
// const Vuexs = r => require.ensure([], () => r(require('./components/Vuexs')), 'Vuexs');
// const modal = r => require.ensure([], () => r(require('./ui/uiModal')), 'modal');
// const icons = r => require.ensure([], () => r(require('./ui/uiIcons')), 'icons');
// const buttons = r => require.ensure([], () => r(require('./ui/uiButtons')), 'buttons');
// const alertify = r => require.ensure([], () => r(require('./ui/uiAlertify')), 'alertify');
// const table = r => require.ensure([], () => r(require('./ui/uiTable')), 'table');
// const list = r => require.ensure([], () => r(require('./ui/uiList')), 'list');
// const form = r => require.ensure([], () => r(require('./ui/uiForm')), 'form');


Vue.use(Router);

const routers = [{
        path: "/",
        name: "/",
        component: Shared,
        //嵌套路由
        children: [{
                path: "", //默认路由
                name: "home",
                component: Home
            },
            {
                path: "settings",
                name: "settings",
                component: settings
            },
            {
                path: "orderList",
                name: "orderList",
                component: orderList
            },
            {
                path: "importOrder",
                name: "importOrder",
                component: importOrder
            },
            {
                path: "modal",
                name: "modal",
                component: modal
            },
            {
                path: "icons",
                name: "icons",
                component: icons
            },
            {
                path: "buttons",
                name: "buttons",
                component: buttons
            },
            {
                path: "alertify",
                name: "alertify",
                component: alertify
            },
            {
                path: "table",
                name: "table",
                component: table
            },
            {
                path: "list",
                name: "list",
                component: list
            },
            {
                path: "form",
                name: "form",
                component: form
            },
            {
                path: "vuexs",
                name: "vuexs",
                component: Vuexs
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
];

const router = new Router({
    mode: 'history',
    routes: routers
});

//路由守卫，登录验证
//AuthService.loginAuth(router, routers);

export default router;