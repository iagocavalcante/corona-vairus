import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const CardContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  position: absolute;
  top: ${screenHeight / 4.2}px;
`;