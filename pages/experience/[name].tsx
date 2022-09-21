import React from 'react'
import { useRouter } from 'next/router'

const CompanyDetail = () => {
  const router = useRouter()
  const { name } = router.query

  return <div />
}

export default CompanyDetail
