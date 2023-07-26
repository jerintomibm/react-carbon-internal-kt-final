import axios from "axios"
import React, { useEffect, useState } from 'react'
import { ContainedList, ContainedListItem, Loading } from "@carbon/react"
const Requests = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10").then((response) => {
      setData(response.data.jokes)
      setLoading(false)
      console.log(response.data.jokes);
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div className='request-container'>
      <div className="jokes-container">
        <ContainedList label="Jokes API" kind='on-page' isInset={false} size='xl'>
          {loading ?
            <Loading
              description="Active loading indicator"
              small />
            : data.map((d) => <ContainedListItem>{d.joke}</ContainedListItem>)}
        </ContainedList>

      </div>
    </div>
  )
}

export default Requests
