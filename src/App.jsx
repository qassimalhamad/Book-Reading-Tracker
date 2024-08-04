
import './App.css'

function App() {
  const books = [
    { name: 'You', read: true },
    { name: 'GOT', read: true },
    { name: 'Harry-Potter', read: false },
  ];
  const booksList = books.map((book, index) => (
    <li key={index} className={book.read ? 'read' : 'not-read'}>
      {book.name}
    </li>
  ))

  return (
    <>
      <h1>Book List</h1>
      {booksList}
    </>
  )
}

export default App
