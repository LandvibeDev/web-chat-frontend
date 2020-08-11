import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Text from '../atoms/Text';

const InternalInputBox = styled.div`
  margin: ${(props) => props.margin};
  text-align: center;
`;

function InputBox(props) {
    const {
        onChange, onKeyPress, label, name, margin
    } = props;

    return (
        <InternalInputBox margin={margin}>
            <Text text={label} fontSize="2rem" />
            <Input onChange={onChange} onKeyPress={onKeyPress} value={name} width="50%" margin="0 0 0 2rem" />
        </InternalInputBox>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    margin: PropTypes.string
};

InputBox.defaultProps = {
    margin: '0'
};

export default InputBox;
