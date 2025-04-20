import React from 'react'
import { withAdminAuth } from '../HOC'

function AdminAuthentication() {
  return (
    <div>AdminAuthentication</div>
  )
}

export default withAdminAuth(AdminAuthentication)