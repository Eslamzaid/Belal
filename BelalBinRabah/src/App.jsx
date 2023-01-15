import React from 'react'
import HomeFirst from "./HomeFirstPage/HomeFirst"
import Loading from './Loading/Loading'
import "./App.css"

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  return (
    <div>
      {
        isLoading ? <Loading/> : <HomeFirst/>
      }
    </div>
  )
}

