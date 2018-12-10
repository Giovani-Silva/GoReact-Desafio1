import React from 'react'

const PostHeader = post => {
  return (
    <div className='user'>
      <img className='avatar' src={post.avatar} alt='' />
      <div className='user_info'>
        <strong>{post.name}</strong>
        <small>{post.moment}</small>
      </div>
    </div>
  )
}
export default PostHeader
