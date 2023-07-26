import React from 'react'
import {Breadcrumb,BreadcrumbItem} from "@carbon/react"
import Logo from "../../assets/logo.jpeg"
const Footer = () => {
  return (
    <div className='footer'>
      <img src={Logo} alt='ibm-logo' />
      <Breadcrumb noTrailingSlash className='breadcrumb'>
        <BreadcrumbItem  href="/">Home</BreadcrumbItem>
        <BreadcrumbItem  href="/fetch">Fetch API</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default Footer
