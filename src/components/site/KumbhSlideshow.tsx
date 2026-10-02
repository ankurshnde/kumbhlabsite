import { useEffect, useState } from "react";

export function KumbhSlideshow({
  images,
  interval = 5000,
}: {
  images: string[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % images.length), interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Pilgrims gathered along the ghats of the Godavari river during the Nashik Simhastha Kumbh Mela"
          loading={i === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-6 bg-background" : "w-1.5 bg-background/60"
            }`}
          />
        ))}
      </div>
    </figure>
  );
}
