import React from 'react'

function Book(props) {
  return (
    <div>
        <h2>The book "{props.name}" is written by "{props.author}" </h2>
    </div>
  )
}

export default Book