import React, { useState, useEffect } from 'react';
import { Container, Header, HeaderHour, HeaderTitle, HeaderNumber } from '../../assets/styles';
import Cards from '../../components/card';
import { CardContainer } from './components/style';
import BarChart from '../../components/chart';
import { CardNumber } from '../../components/card/style';
import { ScrollView, Dimensions } from 'react-native';

const barInterval = 2
const barItemTop = 16
const Home = () => {
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setScreenDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const scrollHeight = 250 * 0.4 + Math.abs(10) * 0.4 + barItemTop;
  
  // Sample data for death cases - making it more realistic and responsive
  const deathsData = [
    { value: 45, date: 'Mar 18' },
    { value: 25, date: 'Mar 19' },
    { value: 190, date: 'Mar 20' },
    { value: 10, date: 'Mar 21' },
    { value: 200, date: 'Mar 22' },
    { value: 150, date: 'Mar 23' },
    { value: 80, date: 'Mar 24' }
  ];

  // Sample data for recovered cases
  const recoveredData = [
    { value: 30, date: 'Mar 18' },
    { value: 45, date: 'Mar 19' },
    { value: 60, date: 'Mar 20' },
    { value: 55, date: 'Mar 21' },
    { value: 70, date: 'Mar 22' },
    { value: 85, date: 'Mar 23' },
    { value: 95, date: 'Mar 24' }
  ];

  const maxDeaths = Math.max(...deathsData.map(d => d.value));
  const minDeaths = Math.min(...deathsData.map(d => d.value));
  const maxRecovered = Math.max(...recoveredData.map(d => d.value));
  const minRecovered = Math.min(...recoveredData.map(d => d.value));
  
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
            {deathsData.map((data, index) => (
              <BarChart
                key={index}
                value={data.value}
                high={maxDeaths}
                low={minDeaths}
                color={'#fa5252'}
                unitHeight={0.4}
                date={data.date}
                barItemTop={barItemTop}
                barInterval={barInterval}
              />
            ))}
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
            {recoveredData.map((data, index) => (
              <BarChart
                key={index}
                value={data.value}
                high={maxRecovered}
                low={minRecovered}
                color={'#34c360'}
                unitHeight={0.4}
                date={data.date}
                barItemTop={barItemTop}
                barInterval={barInterval}
              />
            ))}
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
    </ScrollView>
  )
};

export default Home;
