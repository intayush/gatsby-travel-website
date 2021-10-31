import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"

const Carousel = ({ children }) => {
  const settings = {
    className: "center",
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    dots: true,
    slidesToShow: 4,
    speed: 500,
    nextArrow: <Scroll />,
    prevArrow: <Scroll />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return <Slider {...settings}>{children}</Slider>
}


const Scroll = styled.div`
  :before {
    color: black;
  }
`
export default Carousel


// const [width, setWidth] = useState(25)
// useEffect(() => {
//   const resizeListener = () => {
//     if (window.innerWidth > 1200 && width !== 25) {
//       setWidth(25)
//     } else if (
//       window.innerWidth <= 1200 &&
//       window.innerWidth > 960 &&
//       width !== 33.33
//     ) {
//       setWidth(33.33)
//     } else if (
//       window.innerWidth <= 960 &&
//       window.innerWidth > 786 &&
//       width !== 50
//     ) {
//       setWidth(50)
//     } else if (window.innerWidth <= 786 && width !== 100) {
//       setWidth(100)
//     }
//   }
//   window.addEventListener("resize", resizeListener)
//   resizeListener()
// }, [width])
//const [activeItem, setActiveItem] = useState(1)
// const scrollHandler = nowActive => {
//   let visibleItems = 0
//   if (width === 25) {
//     visibleItems = 3
//   } else if (width === 33.33) {
//     visibleItems = 2
//   } else if (width === 50) {
//     visibleItems = 1
//   }
//   if (
//     data.allInternationalTripsJson.edges.length > nowActive + visibleItems &&
//     nowActive >= 0
//   ) {
//     // const edgeArray = Array(data.allInternationalTripsJson.edges);
//     // const last = edgeArray.pop();
//     // edgeArray.unshift(last);
//     // data.allInternationalTripsJson.edges = edgeArray;
//     setActiveItem(nowActive)
//   }
// }

// const getItemsFromWidth = width => {
//   let visibleItems = 0
//   if (width === 25) {
//     visibleItems = 3
//   } else if (width === 33.33) {
//     visibleItems = 2
//   } else if (width === 50) {
//     visibleItems = 1
//   }
//   return visibleItems + 1
// }
{
  /* {activeItem + noOfItems - 1 !==
    data.allInternationalTripsJson.edges.length - 1 &&
    noOfItems < data.allInternationalTripsJson.edges.length && (
      <ScrollRight onClick={() => scrollHandler(activeItem + 1)}>
        <ScrollRightIcon />
      </ScrollRight>
    )}
  {activeItem !== 0 && (
    <ScrollLeft onClick={() => scrollHandler(activeItem - 1)}>
      <ScrollLeftIcon />
    </ScrollLeft>
  )}
  <Reel style={{ transform: `translateX(-${activeItem * width}%)` }}> */
}
//const noOfItems = useMemo(() => getItemsFromWidth(width), [width])
// const ScrollRightIcon = styled(BsChevronCompactRight)`
//   font-size: 100px;
//   color: white;
// `
// const ScrollLeftIcon = styled(BsChevronCompactLeft)`
//   font-size: 100px;
//   color: white;
// `
// const ScrollRight = styled.div`
//   position: absolute;
//   right: 0;
//   height: 100%;
//   width: 5%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 5;
//   background: black;
//   opacity: 0.5;
//   border-top-right-radius: 10px;
//   border-bottom-right-radius: 10px;
//   cursor: pointer;
//   @media screen and (max-width: 786px) {
//     width: 10%;
//   }
//   &:hover {
//     opacity: 1;
//   }
// `
// const ScrollLeft = styled.div`
//   position: absolute;
//   left: 0;
//   height: 100%;
//   width: 5%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 5;
//   background: black;
//   opacity: 0.5;
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
//   cursor: pointer;
//   @media screen and (max-width: 786px) {
//     width: 10%;
//   }
//   &:hover {
//     opacity: 1;
//   }
// `
// const Reel = styled.div`
//   height: 100%;
//   width: 100%;
//   white-space: nowrap;
//   transition: transform 0.3s;
// `
