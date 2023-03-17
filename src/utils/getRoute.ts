import { Route } from 'react-router-dom';
import { IRouteConfig } from '../routes';

const routes = [
    {
        path: '/page',
        element: 'aaa',
        children: [
            {
                path: '/pageb',
                element: 'bbb',
            },
        ],
    },
];

const getroutes = (routes: IRouteConfig[]) => {
    routes.map((item: IRouteConfig) => {
        if (item?.children?.length) {
            getroutes(item.children);
        }
        return `<Route path={${item.path}} element={${item.element}}></Route>`;
    });
};
