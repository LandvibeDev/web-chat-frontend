import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../../../../components/organisms/Header';
import RoomBoardSection from '../../../../components/organisms/RoomBoardSection';
import Footer from '../../../../components/organisms/Footer';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function RoomBoardTemplate({ rooms }) {
    return (
        <Container>
            <Header />
            <RoomBoardSection rooms={rooms} />
            <Footer />
        </Container>
    );
}

RoomBoardTemplate.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RoomBoardTemplate;
