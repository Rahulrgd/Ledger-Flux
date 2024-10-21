import React from 'react'
import AccountList from './AccountList'
import AccountDetails from './AccountDetails'

function Accounts() {
  return (
    <div>
      <div>AccountList</div>
      <AccountList/>
      <div>AccountDetails</div>
      <AccountDetails />
      <div>AddAccountForm</div>
      <div>EditAccountForm</div>
      <div>AccountBalanceSummary</div>
      <div>TransactionHistory</div>
      <div>AccountTypeFilter</div>
      <div>DeleteAccountModal</div>
      <div>AccountOverviewChart</div>
      <div>SearchAccount</div>
      <div>AccountSettings</div>
    </div>
  )
}

export default Accounts