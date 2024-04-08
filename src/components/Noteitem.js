import React from 'react'

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className='col-md-3'>
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatum at? Consequatur nisi illo ipsum iure saepe fugit consequuntur eum molestias, nemo officia dolore quam tempora soluta. Suscipit, necessitatibus dolores!</p>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
