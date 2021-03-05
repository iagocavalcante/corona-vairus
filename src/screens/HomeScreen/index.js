import React from 'react';
import { Container, Header, HeaderHour, HeaderTitle, HeaderNumber } from '../../assets/styles';
import Cards from '../../components/card';
import { CardContainer } from './components/style';
import BarChart from '../../components/chart';
import { CardNumber } from '../../components/card/style';
import { ScrollView } from 'react-native';

const barInterval = 2
const barItemTop = 16
const Home = () => {

  /**
   * calculate lowest, highest, average, total of a group of data
   * @params data{Array} indicatior{String}
   * @return {low, high, lowDate, highDate, avg, sum, count}
   */
  // function calculateLog (data) {
  //   const count = data.length
  //   let high = data[0][indicator]
  //   let low = data[0][indicator]
  //   let highDate = data[0]['gameDate']
  //   let lowDate = data[0]['gameDate']
  //   let sum = 0

  //   let value
  //   data.forEach((d, index) => {
  //     value = d[indicator]
  //     sum += value
  //     if (value < low) {
  //       low = value
  //       lowDate = data[index]['gameDate']
  //     } else if (value > high) {
  //       high = value
  //       highDate = data[index]['gameDate']
  //     }
  //   })

  //   return {
  //     low,
  //     high,
  //     count,
  //     sum,
  //     avg: sum / count,
  //     highDate,
  //     lowDate
  //   }
  // }

  const scrollHeight = 250 * 0.4 + Math.abs(10) * 0.4 + barItemTop;
  
  return (
    <Container>
      <Header>
        <HeaderHour>
          Mar 22, 2020, 12:48 GMT
        </HeaderHour>
        <HeaderTitle>
          Corona Vairus Cases
        </HeaderTitle>
        <HeaderNumber>
          234,000
        </HeaderNumber>
      </Header>
      <CardContainer>
        <Cards cardSize={'sm'} title={'DEATHS'} number={'13,000'}>
          <CardNumber>{'12,000'}</CardNumber>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            directionalLockEnabled
            style={[{position: 'relative'}, {height: scrollHeight}]}
          >
            <BarChart
              value={45}
              high={90}
              low={10}
              color={'#fa5252'}
              unitHeight={0.4}
              date={new Date()}
              barItemTop={barItemTop}
              barInterval={barInterval}
            />
            <BarChart
              value={25}
              high={50}
              low={10}
              color={'#fa5252'}
              unitHeight={0.4}
              date={new Date()}
              barItemTop={barItemTop}
              barInterval={barInterval}
            />
            <BarChart
              value={190}
              high={250}
              low={150}
              color={'#fa5252'}
              unitHeight={0.4}
              date={new Date()}
              barItemTop={barItemTop}
              barInterval={barInterval}
            />
            <BarChart
              value={10}
              high={50}
              low={10}
              color={'#fa5252'}
              unitHeight={0.4}
              date={new Date()}
              barItemTop={barItemTop}
              barInterval={barInterval}
            />
            <BarChart
              value={200}
              high={250}
              low={150}
              color={'#fa5252'}
              unitHeight={0.4}
              date={new Date()}
              barItemTop={barItemTop}
              barInterval={barInterval}
            />
          </ScrollView>
        </Cards>
        <Cards cardSize={'sm'} title={'RECOVERED'} number={'13,000'}>
          <CardNumber green>{'12,000'}</CardNumber>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            directionalLockEnabled
            style={[{position: 'relative'}, {height: scrollHeight}]}
          >
            <BarChart
              value={30}
              high={70}
              low={30}
              color={'#34c360'}
              unitHeight={0.4}
              date={new Date()}
              barItemTop={barItemTop}
              barInterval={barInterval}
            />
          </ScrollView>
        </Cards>
        <Cards title={'RECOVERED'} number={'13,000'} isPercentage={true}>
          <CardNumber green>{'12,000'}</CardNumber>
        </Cards>
        <Cards title={'RECOVERED'} number={'13,000'} isPercentage={true}>
          <CardNumber green>{'12,000'}</CardNumber>
        </Cards>
      </CardContainer>
    </Container>
  )
};

export default Home;
