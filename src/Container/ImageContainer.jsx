import { ImageContainer } from "./ImageContainer.styles";

import {data} from "../utils/data.jsx";

export default function Images() {

  console.log(data)

  return (
    <ImageContainer>
        <img src={data[0]} alt="" />
    </ImageContainer>
  )
}
