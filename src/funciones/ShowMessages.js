import React from 'react'

function ShowMessages(props) {
  return (
    <div>
        <div>
            <h1>
                Usuario: Mensaje
            </h1>

            <p>{props.username}: {props.message}</p>
        </div>
    </div>
  )
}

export default ShowMessages