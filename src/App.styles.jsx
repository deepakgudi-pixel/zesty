import styled from 'styled-components';


export const MainContainer = styled.section`
 display: flex;
 height: 100vh;
 justify-content: space-between;

 @media (max-width: 768px){
    flex-direction: column;
}

`;