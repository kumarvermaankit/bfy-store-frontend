import { ShoppingBag } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-image">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 hero-bg">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
           Buy For You
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal pt-[10px]"
          >
          Replenish Your Wellness: Embrace Self-Care with Every Selection. </Heading>
        </span>
        <a
          href="/store"
        >
          <Button variant="secondary">
            Shop
            <ShoppingBag />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
