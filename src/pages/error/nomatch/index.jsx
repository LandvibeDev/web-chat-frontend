import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import { useHistory } from 'react-router-dom';
import Text from 'components/atoms/Text';

const StyledNoMatch = styled.section`
  margin: 10em;
  padding: 2em;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 15em;
`;

function NoMatch() {
    const history = useHistory();
    const onGoHome = (event) => {
        event.stopPropagation();
        history.push('/');
    };

    const onGoBack = (event) => {
        event.stopPropagation();
        history.goBack();
    };

    const alertMessage = `'${history.location.pathname}' 경로에 대한 페이지가 존재하지 않습니다. 다시 한번 확인해주세요.`;
    return (
        <StyledNoMatch>
            <Text text={alertMessage} size="md" boxModel="md" />
            <Button text="메인 페이지로 가기" groupRatio={1} onClick={onGoHome} color="blue" />
            <Button text="이전 페이지로 가기" groupRatio={1} onClick={onGoBack} color="green" />
        </StyledNoMatch>
    );
}

export default NoMatch;
