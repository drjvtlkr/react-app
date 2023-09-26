import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const author = 'James XClear'
const Book = () => {
  const title = 'Atomic Habits'
  return (
    <article className="book">
      <img
        // className="book"
        src="https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg"
        alt="Atomic Habits"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
