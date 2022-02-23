import React from 'react';
import { PageNumber } from './PageNumber';
import { Link } from 'react-router-dom';

export const List = ({ cryptos, page, setPage, filter }) => {


    const filterCryptos = cryptos.filter(crypto => crypto.name.toLowerCase().includes(filter.toLowerCase()))

    return <>
        <div className='my-20'>
            {filterCryptos.length > 0 ? <PageNumber page={page} setPage={setPage} /> : null}
            {filterCryptos.map((m, index) => (
                <Link key={index} to={`/coin/${m.id}`}>
                    <div className='flex justify-center items-center w-full text-center h-20 hover:bg-red-300'>
                        <img src={m.image} className='w-6 md:w-12 lg:w-18' />
                        <h1 className='w-1/12'>{m.symbol}</h1>
                        <h1 className="w-3/12 text-3xl font-bold underline text-slate-600 whitespace-nowrap overflow-hidden">{m.name}</h1>
                        <h1 className='w-1/12'>{m.current_price} €</h1>
                    </div>
                    <hr className='border-2 w-full border-amber-900' />
                </Link>
            ))}
        </div>
        <PageNumber page={page} setPage={setPage} />
    </>
}
