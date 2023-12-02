import React from 'react'

const HomePage = ({token}) => {
  return (
    <div>
      Welcome, {token.user.app_metadata.email}
    </div>
  )
}

export default HomePage
