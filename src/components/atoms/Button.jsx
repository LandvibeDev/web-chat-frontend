import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InternalButton = styled.button`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  border-radius: 12px;
  transition-duration: 0.4s;
  &:hover {
      border: 3px solid ${(props) => props.backgroundColor};
      background-color: ${(props) => props.color};
      color: ${(props) => props.backgroundColor};
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
   &:focus {
      border: none;
      background-color: ${(props) => props.backgroundColor};
      color: ${(props) => props.color};
  }
`;

function Button(props) {
    const { text } = props;
    return (
        <InternalButton {...props}>
            {text}
        </InternalButton>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    display: PropTypes.string,
    fontSize: PropTypes.string,
    /** Hello 버튼 누를 때 호출할 함수 */
    backgroundColor: PropTypes.string,
    color: PropTypes.string
};

Button.defaultProps = {
    width: '100%',
    margin: '0 auto',
    padding: '0',
    display: 'block',
    fontSize: '1.5rem',
    backgroundColor: '#ff847c',
    color: 'white'
};

export default Button;
