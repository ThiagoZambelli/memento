import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import forja from '../assets/forja.svg';
import useResetaForja from 'Pages/ForjaDeLendas/state/hooks/useResetaForja';

const bannerForja = {
    backgroundImage: `url('${forja}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '200px',
    boxShadow: '0 0 9px black', // Ajuste a altura conforme necessário
};

function ForjaCriacao() {
    const location = useLocation();
    const reset = useResetaForja();

    useEffect(() => {
        reset();
    }, [location])

    return (
        <section>
            <section style={bannerForja} />
            <Outlet />
        </section>
    )
}

export default ForjaCriacao