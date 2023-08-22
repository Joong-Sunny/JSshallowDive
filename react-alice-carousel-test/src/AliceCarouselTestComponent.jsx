import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'

const handleDragStart = (e) => e.preventDefault();

// eslint-disable-next-line react/prop-types
const Gallery = ({markedNumber}) => {
  const numbers = [1, 2, 3];
  const items = numbers.map(v => (
    <div className="wrapper">
      <img
        className={ v === markedNumber ? "smallItem" : "item"}
        src={`/thispersondoesnotexist${v}.jpeg`}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
  ));

  return (

    <div className="ddong">
      <AliceCarousel
        mouseTracking
        items={items}
      />
    </div>
  );
}

export default Gallery;