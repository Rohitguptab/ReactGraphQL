import React, { Component } from 'react'

export default function BlogItem({Blog}) {
    return (
      <li className="list-group-item">
        <h2 className="list-group-item-heading"><a href={Blog.id}>{Blog.title}</a></h2>
        <p className="list-group-item-text">{Blog.body}</p>
      </li>
    )
}
