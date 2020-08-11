import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

const InternalFooter = styled.div`
  background-color: #93b5b3;
  height: 10%;
  padding: 2rem;
`;

function Footer() {
    return (
        <InternalFooter>
            <Text text="Landvibe" fontSize="2rem" />
        </InternalFooter>
    );
}

export default Footer;
