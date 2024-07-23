import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import EmblaCarousel from "../carousel/EmblaCarousel";
type ImageGalleryProps = {
  images: MedusaImage[]
}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ImageGallery = ({ images }: ImageGalleryProps) => {


  // const slides =  images.map((image, index) => (
  //   <Container
  //     key={index}
  //     className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
  //     id={image.id}
  //   >
  //     <Image
  //       src={image.url}
  //       priority={index <= 2 ? true : false}
  //       className="absolute inset-0 rounded-rounded"
  //       alt={`Product image ${index + 1}`}
  //       fill
  //       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
  //       style={{
  //         objectFit: "cover",
  //       }}
  //     />
  //   </Container>
  // ))


  return (
    <div className="items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        <EmblaCarousel slides={images} />
      </div>
    </div>
  )
}

export default ImageGallery
