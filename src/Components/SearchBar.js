import React from 'react';

export const SearchBar=({vrednost,setVrednost, velicina, text})=> {
    return <label className={`relative block w-${velicina}`}>
        <input onChange={(e => setVrednost(e.target.value))} value={vrednost} className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`} placeholder={text} type="text" />
    </label>
}