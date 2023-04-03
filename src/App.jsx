import { MainContainer } from "./App.styles";
import MainTitle from "./components/Title/MainTitle";
import Images from "./Container/ImageContainer";
import { GlobalStyle } from "./themes/GlobalStyles";

export default function App() {
  return (
    <>
    <MainContainer>
      <GlobalStyle />
      <MainTitle />
      <Images />
    </MainContainer>
    </>
  );
}
