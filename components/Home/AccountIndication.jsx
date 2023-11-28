import React from 'react'

const AccountIndication = ({userName = "?????"}) => {
  return (
    <div>You are logged in as {userName}</div>
  )
}

export default AccountIndication