import { useEffect, useState } from 'react';
import Header from "../components/Header";
import { CarouselGradientLeft, CarouselGradientRight, Container, Content, InforImg, Notice, NoticesBox, NoticesBoxCarousel } from '../shared/pages/Carousel/styles';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';


export default function Home() {
  const [position, setPosition] = useState(0);
  const [leftGradient, setLeftGradient] = useState(false);
  const [bannerSrc, setBannerSrc] = useState('');


  useEffect(() => {
    if (position >= 0) {
      setLeftGradient(false);
    } else {
      setLeftGradient(true);
    }
  }, [position]);

  const notices = [
    {
      src: 'https://picsum.photos/293/166',
 
    },
    {
      src: 'https://picsum.photos/293/166',
   
    },
    {
      src: 'https://picsum.photos/293/166',
  
    },
    {
      src: 'https://picsum.photos/293/166',
  
    },
  ];

  const handlePositionRight = () => {
    setPosition(position - 317);
    if (position <= (notices.length - 2) * -317) {
      setPosition(0);
    }
  };

  const handlePositionLeft = () => {
    setPosition(position + 317);
    if (position === 0) {
      setPosition((notices.length - 2) * -317);
    }
  };

  return(
    <Container>
      <Header />
      <Content>
        <NoticesBox>
          <NoticesBoxCarousel position={position}>
            {notices.map(notice => {
              return (
                <Notice
                  onClick={() => {
                    setBannerSrc(notice.src);
                  }}
                >
                  <InforImg src={notice.src} />
                </Notice>
              );
            })}
          </NoticesBoxCarousel>
          <CarouselGradientLeft isActive={leftGradient}>
            <MdNavigateBefore type="button" onClick={handlePositionLeft} />
          </CarouselGradientLeft>
          <CarouselGradientRight>
            <MdNavigateNext type="button" onClick={handlePositionRight} />
          </CarouselGradientRight>
        </NoticesBox>
      </Content>
    </Container>
  )
}