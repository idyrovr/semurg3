import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import { routesProvider } from "./routesProvider";
import Navbar from "../../components/Navbar";


export const RouterProvider = () => {
    return (
        <div>
             <div className='navbarToSticky'><Navbar /></div>
            <Suspense fallback={<div>Loading. . .</div>}>
                <Routes>
                    {
                        Object.values(routesProvider)
                            .map(({ path, element }) => (
                                <Route path={path} element={element} key={path} />
                            ))
                    }
                </Routes>
            </Suspense>
        </div>
    );
};