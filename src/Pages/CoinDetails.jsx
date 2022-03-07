import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';
import { LineChart } from '../Components/LineChart';
import { Link } from 'react-router-dom';

export const CoinDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({})
  const [dataChart, setDataChart] = useState({ prices: [] })

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
      (async () => setDataChart(await DataFetch(`${id}/market_chart?vs_currency=eur&days=1`))
      )()
    return () => cleanUp = false
  }
    , [])

  if (!data.id)
    return <h1>LOADING...</h1>
  return <>
    <div className='w-full bg-red-900 flex items-center h-10 text-5xl'><Link to={'/'}>{'<'}</Link></div>
    <div>{data.name}</div>
    <img src={data.image.small} />
    {dataChart.prices.length > 0 ? <LineChart dataChart={dataChart} /> : <>Loading...</>}
  </>
}