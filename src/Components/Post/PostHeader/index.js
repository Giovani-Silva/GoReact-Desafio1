import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = post => {
  const { avatar, name, moment } = post;
  return (
    <div className="user">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="user_info">
        <strong>{name}</strong>
        <small>{moment}</small>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  moment: PropTypes.string.isRequired
};

export default PostHeader;
