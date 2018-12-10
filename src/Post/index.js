import React from 'react'
import './PostHeader'
import PostHeader from './PostHeader'

const Post = post => {
  return (
    <div className='post'>
      <PostHeader {...post} />
      <div className='content'>{post.body}</div>
    </div>
  )
}
export default Post
