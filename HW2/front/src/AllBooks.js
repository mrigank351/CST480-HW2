export function AllBooks() {
    return fetch('http://localhost:3000/api/allbooks')
      .then(data => data.json())
  }

  export function setItem(item) {
    return fetch('http://localhost:3000/api/addbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(data => data.json())
   }