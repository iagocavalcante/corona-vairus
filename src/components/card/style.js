import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Card = styled.View`
  margin-top: 10px;
  height: ${(props) =>
    props.cardSize == "sm"
      ? `${screenHeight / 4.5}px;`
      : `${screenHeight / 7}px;`}
  width: ${(props) =>
    props.cardSize == "sm"
      ? `${screenWidth / 2.3}px;`
      : `${screenWidth - 30}px;`}
  background-color: #ffffff;
  shadow-color: rgba(0, 0, 0, 0.08);
  shadow-offset: 0px 2px;
  shadow-radius: 6px;
  shadow-opacity: 1;
  border-radius: 11px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 17px;
  letter-spacing: 0;
  text-align: left;
  color: #696969;
`;

export const CardNumber = styled.Text`
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  line-height: 48px;
  letter-spacing: 0;
  text-align: left;
  color: ${(props) => (props.green ? "#34c360" : "#fa5252")};
`;

export const CardChart = styled.View`
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  line-height: 48px;
  letter-spacing: 0;
  text-align: left;
  color: #fa5252;
`;

export const CardContainer = styled.View``;

export const CardPercentage = styled.View`
  flex: 2;
`;

export const CardPercentagePositive = styled.Text`
  flex: 1;
`;
