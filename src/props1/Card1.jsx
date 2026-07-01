import React from 'react'

export default function Card1({ title, quote, author }) {
  return (
   <div>
  <div className="card">
    <div className="card-header">
      {title}
    </div>
    <div className="card-body">
      <figure>
        <blockquote className="blockquote">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {author}
        </figcaption>
      </figure>
    </div>
    <div className="card-body">
      <figure>
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  </div>
</div>
  )
}
