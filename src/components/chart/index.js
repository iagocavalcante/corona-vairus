import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Dimensions
} from 'react-native';
import React, { useState } from 'react';

const tooltipWidth = 100;
const barWidth = 10;

const BarChart = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isHoverCovered, setIsHoverCovered] = useState(false);
  const [isHoverCoveredRight, setIsHoverCoveredRight] = useState(false);
  const [isHoverCoveredLeft, setIsHoverCoveredLeft] = useState(false);

  function onPressIn (e) {
    const screenWidth = Dimensions.get('window').width;

    setIsHover(true);
    setIsHoverCoveredLeft(e.nativeEvent.pageX < (tooltipWidth / 2 + 10))
    setIsHoverCoveredRight(e.nativeEvent.pageX + tooltipWidth / 2 + 20 > screenWidth)
  }

  function onPressOut (e) {
    setIsHover(false);
    setIsHoverCovered(false);
    setIsHoverCoveredRight(false);
  }

  const {color, low, high, value, date, unitHeight, barInterval, barItemTop} = props

  let entity
  let empty
  let wrapperStyle = {}
  if (value >= 0) {
    entity = value
    empty = high - value
  } else {
    entity = Math.abs(value)
    empty = Math.abs(low) - entity
    wrapperStyle = {
      top: high * unitHeight,
      right: barInterval,
      transform: [{
        rotate: '180deg'
      }]
    }
  }

  /* Prevent tooltip covered by the edge */
  let tooltipPosition = {
    left: -(tooltipWidth / 2),
    marginLeft: barWidth / 2
  }
  let tooltipMark = {
    left: tooltipWidth / 2,
    marginLeft: -6,
    borderLeftWidth: 6,
    borderRightWidth: 6
  }
  if (isHoverCoveredLeft) {
    tooltipPosition.left = 0
    tooltipPosition.marginLeft = 0
    tooltipMark.left = 5
    tooltipMark.marginLeft = 0

    delete tooltipMark.borderLeftWidth
  } else if (isHoverCoveredRight) {
    delete tooltipPosition.left
    delete tooltipPosition.marginLeft
    delete tooltipMark.left
    delete tooltipMark.marginLeft

    tooltipPosition.right = 3
    delete tooltipMark.borderRightWidth
    tooltipMark.right = 5
  }

  const baseStyle = {
    backgroundColor: color,
    marginRight: barInterval
  }
    
  return (
    <TouchableHighlight
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      underlayColor='transparent'
    >
      <View style={[styles.container, {marginTop: barItemTop}]}>
        <View style={[styles.barWrapper, wrapperStyle]}>
          <View style={[
            styles.bar,
            styles.empty,
            Object.assign({}, baseStyle, {height: (empty * unitHeight)})
          ]} />
          <View style={[styles.bar, Object.assign({}, baseStyle, {height: (entity * unitHeight)})]} />
        </View>
        {isHover &&
          <View style={[styles.tooltip, tooltipPosition]}>
            <Text style={styles.tooltipContent}>{value + ' in ' + date}</Text>
            <View style={[styles.tooltipMark, tooltipMark]} />
          </View>
        }
      </View>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  // Bar
  barWrapper: {
    position: 'relative'
  },
  bar: {
    width: barWidth
  },
  empty: {
    opacity: 0.2
  },
  // Tooltip
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 2,
    position: 'absolute',
    top: -17,
    width: tooltipWidth
  },
  tooltipContent: {
    color: '#fff',
    fontSize: 9,
    textAlign: 'center'
  },
  tooltipMark: {
    borderTopColor: 'rgba(0, 0, 0, 0.8)',
    borderTopWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    bottom: -5,
    position: 'absolute',
    height: 0,
    width: 0
  }
})

export default BarChart;
