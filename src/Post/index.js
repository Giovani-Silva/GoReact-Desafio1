import React from 'react'
import './PostHeader'
import PostHeader from './PostHeader'

const Post = props => {
  return (
    <div className='post'>
      <PostHeader />
      <div className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        suscipit, blanditiis perferendis sunt odit quae voluptas magnam tempore
        sed cum ut. Repellendus vel quas facere odio a voluptatibus quaerat
        sint!
      </div>
    </div>
  )
}
export default Post
