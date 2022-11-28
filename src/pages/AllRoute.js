import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@/pages/Layout';
import Home from '@/pages/Home';
import Housing from '@/pages/Housing';
import About from '@/pages/About';
import Error from '@/pages/Error';

const AllRoute = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path='/home' element={<Home />} />
                    <Route path='/housing' element={<Housing />} />
                    <Route path='/about' element={<About />} />

                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AllRoute;