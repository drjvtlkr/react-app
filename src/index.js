import React from 'react'
import ReactDOM from 'react-dom/client'

const Greeting = () => {
  return (
    <>
      <div>
        <div className="manig-hog">
          {/* this is rendered in the browser as a class because the camel casing helps decode react the classnames amd class */}
          <h3>hello world</h3>
          <ul>
            <li>
              <a href="#">dancing dogs</a>
            </li>
          </ul>
        </div>
      </div>
      <h1>
        <p>party karenge</p>
      </h1>
    </>
    // we can use this type of React.Frgament to enclose or just go with plain old '<></>' type of styling
  )
}
// function Greeting() {
//   return React.createElement('h2', {}, 'hello world')
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
