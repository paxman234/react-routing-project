import React from 'react';
import Navigation from '../navigation';
import { Outlet, useParams } from 'react-router-dom';

const Root = () => {
    const petTypeParams= useParams;

    const type = petTypeParams('type')
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
};

export default Root;