import React from 'react'
import { Pagination } from 'react-bootstrap'

export default props => {
  const { totalPages, activePage, handleClick } = props

  let pages = []
  for (let number = 1; number <= totalPages; number += 1) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={handleClick(number)}
      >
        {number}
      </Pagination.Item>
    )
  }

  const availablePages = number => {
    const beginPage = activePage - number > 1 ? activePage - number : 1
    const endPage =
      activePage + number < totalPages ? activePage + number : totalPages
    return pages.slice(beginPage - 1, endPage)
  }

  return (
    <Pagination>
      <Pagination.First onClick={handleClick(1)} />
      <Pagination.Prev
        disabled={activePage === 1}
        onClick={handleClick(activePage - 1)}
      />
      <Pagination.Ellipsis disabled />
      {availablePages(5)}
      <Pagination.Ellipsis disabled />
      <Pagination.Next
        disabled={activePage === totalPages}
        onClick={handleClick(activePage + 1)}
      />
      <Pagination.Last onClick={handleClick(totalPages)} />
    </Pagination>
  )
}
