import React from 'react';
import styled from 'styled-components';
import Header from '../../../../components/organisms/Header';
import RoomMakerSection from '../../../../components/organisms/RoomMakerSection';
import Footer from '../../../../components/organisms/Footer';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function RoomMakerTemplate() {
    return (
        <Container>
            <Header />
            <RoomMakerSection />
            <Footer />
        </Container>
    );
}

export default RoomMakerTemplate;
