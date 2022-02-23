import React, { useState, useEffect } from 'react';
import { GlobalSearch } from '../Components/GlobalSearch';
import { List } from '../Components/List';
import { SearchBar } from '../Components/SearchBar';
import { useFetch } from '../Hooks/useFetch';

const Home = () => {
  const [cryptos, setCryptos] = useState([])
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  const { DataFetch } = useFetch()

  useEffect(() => (async () =>
   setCryptos(
     await DataFetch(`markets?vs_currency=eur&order=market_cap_desc&page=${page}&sparkline=false`)
     ))()
   , [page])

  return <>
    <div className='w-full bg-red-900 h-28 fixed top-0'>
      <GlobalSearch />
      <div className='flex w-full items-center justify-center h-24'>
        <SearchBar vrednost={filter} setVrednost={setFilter} velicina={'5/12'} text={'Search for crypto on this page...'} />
      </div>
    </div>
    <List filter={filter} cryptos={cryptos} page={page} setPage={setPage} />
  </>
}

export default Home;
