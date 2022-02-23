import React from 'react';

export const PageNumber = ({ page, setPage }) => {
    return <div className='w-full h-12 items-center flex justify-center pt-14 pb-8'>
        <div className='w-5/12 h-18 flex items-center justify-center text-center'>
        <button className='text-5xl hover:cursor-pointer' onClick={() => setPage(prev => parseInt(prev) - 1)}>{'<'}</button>
        <input className='w-2/12 text-center bg-amber-600' type="number" value={page} onChange={(e) => setPage(e.target.value)} />
        {page>=123  ?null:<button onClick={() => setPage(prev => prev + 2)}>. . . {parseInt(page) + 2}</button>}
        {page>=122?null:<button onClick={() => setPage(prev => prev + 3)}>. . . {parseInt(page) + 3}</button>}
        {page<124?<button onClick={() => setPage(125)}>. . . 125</button>:null}
        {page<125?<h1 className='text-5xl hover:cursor-pointer' onClick={() => setPage(prev => parseInt(prev) + 1)}>{'>'}</h1>:null}
        </div>
    </div>
}

