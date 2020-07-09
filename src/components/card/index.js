

import React from 'react';
import { Card, CardTitle, CardChart, CardContainer, CardPercentage, CardPercentagePositive } from './style';

const Cards = ({title, cardSize, children, isPercentage}) => (
    <Card style={{ elevation: 2}} cardSize={cardSize}>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardChart>
          {children}
        </CardChart>
        {isPercentage && <CardPercentage>
          <CardPercentagePositive>
            {title}
          </CardPercentagePositive>
        </CardPercentage>}
      </CardContainer>
    </Card>
  );

export default Cards;
