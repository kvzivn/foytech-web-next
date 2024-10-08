import { Spotlight } from "./ui/spotlight"

const Spotlights = ({ noAnimation }: { noAnimation?: boolean }) => {
  return (
    <div className="hidden md:block">
      <Spotlight
        className={`-top-1/2 -left-1/2 ${
          noAnimation ? "opacity-40" : "animate-spotlight-left"
        }`}
        fill="#53a2bd"
      />
      <Spotlight
        className={`-top-1/2 -right-1/2 ${
          noAnimation ? "opacity-40" : "animate-spotlight-right"
        }`}
        fill="#53a2bd"
      />
    </div>
  )
}

export default Spotlights
