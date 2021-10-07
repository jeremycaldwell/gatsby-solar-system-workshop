import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query ContactInfoQuery {
      site {
        siteMetadata {
          authorName
          phoneNumber
          emailAddress
        }
      }
    }
  `)

  const { authorName, phoneNumber, emailAddress } = data.site.siteMetadata

  return (
    <>
      <p>
        Thank you for your interest in reaching out. You can contact us via the
        below methods:
      </p>
      <ul>
        <li>{authorName}</li>
        <li>Phone Number: {phoneNumber} </li>
        <li>Email Address: <a href={emailAddress}>{emailAddress}</a>{" "}</li>
      </ul>
    </>
  )
}

export default ContactInfo
