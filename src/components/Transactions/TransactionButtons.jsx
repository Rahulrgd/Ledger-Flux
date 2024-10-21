import React from 'react'
import ExportTransactionsCSV from './ExportTransactionsCSV'
import ExportTransactionsExcel from './ExportTransactionsExcel'
import ExportTransactionsXLSX from './ExportTransactionsXLSX'

function TransactionButtons() {
  return (
    <div>
        <ExportTransactionsCSV/>
        <ExportTransactionsExcel/>
        <ExportTransactionsXLSX/>
    </div>
  )
}

export default TransactionButtons