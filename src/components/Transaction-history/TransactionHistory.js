import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableHead,
  HeadItem,
  TableItem
} from './TransactionHistory.styles'

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableItem>{item.type}</TableItem>
            <TableItem>{item.amount}</TableItem>
            <TableItem>{item.currency}</TableItem>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
}
