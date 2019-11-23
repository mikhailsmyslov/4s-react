import React from 'react'
import { Pagination } from 'react-bootstrap'
import getPagesAround from '../lib/getPagesAround'

export default props => {
  const { totalPages, activePage, handleClick } = props
  const paginationItems = getPagesAround(activePage, totalPages, 5)
  return (
    <Pagination>
      <Pagination.First onClick={handleClick(1)} />
      <Pagination.Prev
        disabled={activePage === 1}
        onClick={handleClick(activePage - 1)}
      />
      {paginationItems.map((number, index) => (
        <Pagination.Item
          key={index}
          active={number === activePage}
          onClick={handleClick(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={activePage === totalPages}
        onClick={handleClick(activePage + 1)}
      />
      <Pagination.Last onClick={handleClick(totalPages)} />
    </Pagination>
  )
}
