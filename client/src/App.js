import React, { useState, useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


function App() {
  // const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //       data => {
  //         setData(data)
  //         console.log(data)
  //       }
  //   )
  // }, [])

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/").then(
      res => res
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
    )
  }, [])


  return (
    <>
    {/* <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div> */}
    <form action='http://localhost:3000' method='get'>
      <p>Name:</p>
      <p><input type="text" name="name"/></p>
      <p><input type="submit" value="submit" /></p>
    </form>
    <div>
      {(typeof data.name === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <p>{data.name}</p>
      )}
    </div>
    </>
  )
}

export default App