import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

ChatPhoto.propTypes = {
  src: PropTypes.string.isRequired,
};
export default function ChatPhoto(props) {
  return (
    <div>
      <Photo src={props.src} alt='유저 프로필 사진' />
    </div>
  );
}
const Photo = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
`;