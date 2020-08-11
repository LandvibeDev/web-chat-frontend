import React from 'react';
import styled from 'styled-components';
import Linker from '../atoms/Linker';

const InternalHeader = styled.div`
  background-color: #63707e;
  height: 20%;
  padding: 3rem 0;
  vertical-align: middle;
`;

function Header() {
    return (
        <InternalHeader>
            <Linker to="/" text="HOME" fontSize="5rem" margin="3rem" />
        </InternalHeader>
    );
}

export default Header;
