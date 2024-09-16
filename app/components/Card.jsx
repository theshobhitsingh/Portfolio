import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  overflow: hidden;
  
  &:hover::after {
    filter: blur(30px);
  }
  
  &:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 210px;
    height: 310px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #e81cff;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c400ff;
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #e81cff;
  font-weight: 600;
`;

const Card = ({ imageUrl, title, subtitle, description, button1Text, button2Text }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="Card Image" />
      <CardContent>
        <Heading>{title}</Heading>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </CardContent>
      <CardButtons>
        {button1Text && <Button>{button1Text}</Button>}
        {button2Text && <Button>{button2Text}</Button>}
      </CardButtons>
    </CardContainer>
  );
};

export default Card;
