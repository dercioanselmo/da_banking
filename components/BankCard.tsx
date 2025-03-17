import Link from 'next/link'
import React from 'react'

export const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href="/" className='bank-card'>
        </Link>
    </div>
  )
}
