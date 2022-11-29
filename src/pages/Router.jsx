import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Home, Housing, About, Error } from '@/pages';

export default function Router () {
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

 