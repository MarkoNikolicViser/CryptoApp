import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';
import { LineChart } from '../Components/LineChart';
import { Link } from 'react-router-dom';

export const CoinDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({})
  const [dataChart, setDataChart] = useState({ prices: [] })
  const [days, setDays] = useState('1')

  const { DataFetch } = useFetch()

  useEffect(() => {
    let cleanUp = true
    if (cleanUp)
      (async () => setData(await DataFetch(id))
      )()
    return () => cleanUp = false
  }
    , [])

  useEffect(() => {
    let cleanUp = true
    if (cleanUp)
      (async () => setDataChart(await DataFetch(`${id}/market_chart?vs_currency=eur&days=${days}`))
      )()
    return () => cleanUp = false
  }
    , [days])

  if (!data.id)
    return <h1>LOADING...</h1>
  return <>
    <div className='w-full bg-red-900 flex items-center h-10 text-4xl pl-4'><Link to={'/'}>{'<'}</Link></div>
    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
      <div className='w-96 flex items-center justify-between'>
        <img src={data.image.small} />
        <h1 className='font-extrabold text-4xl'>{data.name}</h1>
        <select value={days} onChange={e => setDays(e.target.value)} className='w-24' name="" id="">
          <option value="1">24 Hrs</option>
          <option value="7">7 Days</option>
          <option value="30">30 Days</option>
          <option value="365">1 Year</option>
        </select>
      </div>
      {dataChart.prices.length > 0 ? <LineChart days={days} dataChart={dataChart} /> : <>Loading...</>}
    </div>
  </>
}