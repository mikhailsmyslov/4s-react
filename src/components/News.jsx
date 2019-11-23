import React from 'react'
import axios from 'axios'
import NewsPaginationBlock from './NewsPaginationBlock'
import NewsCard from './NewsCard'
import { Row } from 'react-bootstrap'

export default class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = { news: [], totalPages: null, activePage: 1 }
  }

  async componentDidMount() {
    const { data: news, count } = await this.getNewsFromPage(1)
    this.setState({ news, totalPages: Math.ceil(count / 10) })
  }

  getNewsFromPage = async number => {
    const res = await axios.get(`http://api.4slovo.ru/news/page/${number}`)
    return res.data
  }

  handlePageClick = number => async e => {
    e.preventDefault()
    const { data: news } = await this.getNewsFromPage(number)
    this.setState({ activePage: number, news })
  }

  render() {
    const { news, totalPages, activePage } = this.state
    return (
      <div>
        {news.map(({ date, seo_title, seo_description }, index) => (
          <NewsCard
            key={index}
            date={date}
            title={seo_title}
            description={seo_description}
          />
        ))}
        <Row className="justify-content-center">
          <NewsPaginationBlock
            totalPages={totalPages}
            activePage={activePage}
            handleClick={this.handlePageClick}
          />
        </Row>
      </div>
    )
  }
}
