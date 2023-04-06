import { useEffect, useState } from "react";

export const useCallApi = param => {
    const [data, setData] = useState('')
    const [isPending, setIsPending] = useState(true)
    
    const getData = async () => {
      try{
        const res = await fetch(param)
        const parseData = await res.json()
        setIsPending(false)
        setData(parseData)
      }
      catch{
        console.log('error')
      }
    }  
    useEffect(() => {
      getData()
    },[param])

    return {data, isPending}
  }