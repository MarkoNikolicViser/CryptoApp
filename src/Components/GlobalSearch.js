import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'
import {useFetch} from '../Hooks/useFetch'

export const GlobalSearch = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('')
    const {DataFetch}=useFetch()

    useEffect(() => 
        (async()=>setData(await DataFetch('list')))()
    , [])
    const filterCryptos = data.filter(crypto => {
        if(filter.length>1)
        return crypto.name.toLowerCase().includes(filter.toLowerCase())
        }
        )

    return <div className='w-full flex-row'>
        <SearchBar vrednost={filter} setVrednost={setFilter} velicina={'3/12'} text={'Search for crypto globaly...'} />
        <div className='w-3/12 bg-white absolute top-10'>
            {filter.length > 0 && filterCryptos.length > 0 ? <ul className='overflow-y-scroll h-60'>
                {filterCryptos.map((m, index) => (
                    <Link key={index} to={`/coin/${m.id}`}>
                        <li className='hover:bg-red-300' key={index}>{m.name}</li>
                    </Link>
                ))}
            </ul> : null}
        </div>
    </div>
}
