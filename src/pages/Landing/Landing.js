import React from 'react'
import UseState from '../../components/useState/UseState'
import { Column } from "@carbon/react"
import CodeReuse from '../../components/CodeReuse/CodeReuse'
const Landing = () => {
  return (
    <div className="App">

      <Column style={{ marginBottom: "20px", textAlign: "center" }} lg={16} md={8} sm={4}>
        <h1 style={{ fontWeight: "800", fontSize:"3.5rem",marginTop:"100px" }}>React and Carbon Tutorial.</h1>
      </Column>
      <UseState />
      <CodeReuse />
    </div>
  )
}

export default Landing
