import React from 'react';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';

const Post = post => {
  return (
    <div className="post">
      <PostHeader {...post} />
      <div className="content">{post.body}</div>
    </div>
  );
};

Post.propTypes = {
  body: PropTypes.string.isRequired
};
export default Post;
