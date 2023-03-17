import { ComponentType, lazy, LazyExoticComponent } from 'react';
import { Navigate } from 'react-router-dom';

export interface IRouteConfig {
    path: string;
    element: LazyExoticComponent<ComponentType<any>>;
    children?: IRouteConfig[];
}

export const routes: IRouteConfig[] = [
    {
        path: '/musicRecommand',
        element: lazy(
            () =>
                import(
                    /* webpackChunkName:"pagea" */ './pages/musicRecommand/index'
                ),
        ),
        // children: [
        //     {
        //         path: 'bbbb',
        //         element: lazy(
        //             () => import(/* webpackChunkName:"pageb" */ './pages/b'),
        //         ),
        //         children: [
        //             {
        //                 path: 'aaaa',
        //                 element: lazy(
        //                     () =>
        //                         import(
        //                             /* webpackChunkName:"pageb" */ './pages/a'
        //                         ),
        //                 ),
        //             },
        //         ],
        //     },
        // ],
    },
    // {
    //     path: '/page',
    //     element: lazy(() => import(/* webpackChunkName:"pagea" */ './pages/b')),
    // },
];
