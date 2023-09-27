import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'

const firstBook = {
  author: 'Jordan Petersen',
  title: '12 Rules For Life',
  img: 'https://m.media-amazon.com/images/I/71OVB8HknWL._SL1500_.jpg',
}

const secondBook = {
  author: 'Hector Garcia and Francesc Miralles',
  title: 'Ikigai',
  img: 'https://m.media-amazon.com/images/I/814L+vq01mL._SL1500_.jpg',
}
// const title = 'Atomic Habits'
// const author = 'James XClear'
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { author, title, img } = props
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{title}</h2>
      <h4> {author} </h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
