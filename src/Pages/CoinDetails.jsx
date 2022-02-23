import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';
import { LineChart } from '../Components/LineChart';

export const CoinDetails = () => {
    const { id } = useParams();
    const [data,setData]=useState([])
    const [dataChart,setDataChart]=useState([])

    const {DataFetch}=useFetch()
useEffect(()=>(
    async()=>setData(await DataFetch(id))
    )()
,[])
useEffect(()=>(
  async()=>setDataChart(await DataFetch(`${id}/market_chart?vs_currency=eur&days=1`))
  )()
,[])
useEffect(()=>console.log(dataChart),[dataChart])

if(data.length==0)
return <h1>LOADING...</h1>
  return (<>
    <div>{data.name}</div>
    <img src={data.image.small} alt="" />
    <LineChart dataChart={dataChart}/>
    </>
  )
}