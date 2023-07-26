import React,{useState} from 'react'
import {Grid,Column,Button} from "@carbon/react"
const UseState = () => {
    let scounter=0;
  const [dcounter, setDcounter] = useState(0);
    const handleDecrement = () => {
        scounter-=1;
        console.log(scounter);
      }
      const handleDynamicIncrement = ()=>{
        setDcounter(prevCount => prevCount+1)
      }
      const handleDynamicDecrement = ()=>{
        setDcounter(prevCount => prevCount-1)
      }
      const handleIncrement = () => {
        scounter+=1;
        console.log(scounter);
      }
  return (
    <Grid className='main-container'>
        <Column lg={16} md={8} sm={4}>
          <h2 style={{ textDecoration: "underline", marginBottom: "70px" }}>1. Dynamic Rendering</h2>
          <Column style={{ display: "flex", gap: "30px", justifyContent: "center", marginBottom:"15px" }} lg={16} md={8} sm={4}>
            <Button kind="danger" onClick={handleDynamicDecrement}>Decrement</Button>
            <h3>Dynamic variable - {dcounter}</h3>
            <Button  kind="primary" onClick={handleDynamicIncrement}>Increment</Button>
          </Column>
          <Column style={{ display: "flex", gap: "30px", justifyContent: "center", marginBottom:"15px" }} lg={16} md={8} sm={4}>
            <Button  kind="danger" onClick={handleDecrement}>Decrement</Button>
            <h3>Static variable - {scounter}</h3>
            <Button kind="primary" onClick={handleIncrement}>Increment</Button>
          </Column>
        </Column>
      </Grid>
  )
}

export default UseState
