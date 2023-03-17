// import './App.css'
import React from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import { IRouteConfig, routes } from './routes';
import A from './pages/a';
import B from './pages/b';

function App() {
    // const [count, setCount] = useState(0)

    const getRoute: any = (routes: IRouteConfig[]) => {
        return routes.map((item: IRouteConfig) => {
            if (!item?.children) {
                return (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={<item.element />}
                    ></Route>
                );
            }
            return (
                <Route
                    key={item.path}
                    path={item.path}
                    element={<item.element />}
                >
                    {getRoute(item.children)}
                </Route>
            );
        });
    };

    return (
        <Router>
            <Routes>
                {getRoute(routes)}
                {/* <Route path='/' element={<A />}>
                    <Route path='aaaa' element={<B />} />
                </Route>
                <Route path='/' element={<Navigate to={'/page'} />} /> */}
                <Route path='/' element={<Navigate to={'/musicRecommand'} />} />
            </Routes>
        </Router>
    );
}

export default App;
