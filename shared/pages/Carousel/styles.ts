import styled from '@emotion/styled';

interface LeftGradientProps {
  isActive: boolean;
}
interface NoticesCarouselProps {
  position: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;
export const Content = styled.div`
  height: 130vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;

  background-color: #222;
`;

export const NoticesBox = styled.div`
  height: 166px;
  max-width: 100%;
  display: flex;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
`;

export const NoticesBoxCarousel = styled.div<NoticesCarouselProps>`
  height: 166px;
  display: flex;
  transform: translateX(${props => props.position}px);
  gap: 24px;
  transition: 1s;
`;

export const CarouselGradientRight = styled.div`
  position: absolute;
  width: 93px;
  height: 166px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  background: linear-gradient(to left, #3b3b3b, transparent);

  svg {
    width: 24px;
    height: 24px;
    color: #ed6464;
    border-radius: 5px;
    transition: 0.3s;
    :hover {
      background-color: #ed64644d;
      color: #222;
    }
  }
`;

export const CarouselGradientLeft = styled.div<LeftGradientProps>`
  display: ${props => (props.isActive ? 'flex' : 'none')};
  position: absolute;
  width: 93px;
  height: 166px;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background: linear-gradient(to right, #3b3b3b, transparent);
  animation: showup 0.7s linear normal;
  
  svg {
    width: 24px;
    height: 24px;
    color: #ed6464;
    border-radius: 5px;
  transition: 0.3s;
    :hover {
      background-color: #ed64644d;
      color: #222;
    }
  }
`;

export const Notice = styled.div`
  width: 293px;
  height: 166px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3b3b3b;
  border: 1px solid var(--primaryColor);
  border-radius: 5px;
`;

export const InforImg = styled.img`
  width: 293px;
  height: 166px;
  border-radius: 5px;
  cursor: pointer;
`;

