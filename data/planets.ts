export const planets: Planet[] = [
  {
    id: 1,
    slug: "mercury",
    name: "Mercury",
    type: "Terrestrial Planet",
    description: "The smallest planet and the closest world to the Sun.",
    distanceFromSun: "57.9M km",
    moons: 0,
    colors: {
      from: "#e4e4e7",
      via: "#71717a",
      to: "#18181b",
    },
  },
  {
    id: 2,
    slug: "venus",
    name: "Venus",
    type: "Terrestrial Planet",
    description:
      "A hot rocky planet with a thick atmosphere and extreme surface temperatures.",
    distanceFromSun: "108.2M km",
    moons: 0,
    colors: {
      from: "#fef9c3",
      via: "#eab308",
      to: "#713f12",
    },
  },
  {
    id: 3,
    slug: "earth",
    name: "Earth",
    type: "Terrestrial Planet",
    description:
      "The only known planet with life and liquid water on its surface.",
    distanceFromSun: "149.6M km",
    moons: 1,
    colors: {
      from: "#7dd3fc",
      via: "#0284c7",
      to: "#0c4a6e",
    },
  },
  {
    id: 4,
    slug: "mars",
    name: "Mars",
    type: "Terrestrial Planet",
    description:
      "A cold desert planet known for its red surface and ancient river valleys.",
    distanceFromSun: "227.9M km",
    moons: 2,
    colors: {
      from: "#fca5a5",
      via: "#dc2626",
      to: "#450a0a",
    },
  },
  {
    id: 5,
    slug: "jupiter",
    name: "Jupiter",
    type: "Gas Giant",
    description:
      "The largest planet in the solar system with powerful storms and many moons.",
    distanceFromSun: "778.5M km",
    moons: 95,
    colors: {
      from: "#fde68a",
      via: "#d97706",
      to: "#431407",
    },
  },
  {
    id: 6,
    slug: "saturn",
    name: "Saturn",
    type: "Gas Giant",
    description: "A giant planet famous for its bright ring system.",
    distanceFromSun: "1.4B km",
    moons: 146,
    colors: {
      from: "#fef3c7",
      via: "#f59e0b",
      to: "#78350f",
    },
  },
  {
    id: 7,
    slug: "uranus",
    name: "Uranus",
    type: "Ice Giant",
    description: "A cold blue-green planet that rotates on its side.",
    distanceFromSun: "2.9B km",
    moons: 28,
    colors: {
      from: "#a5f3fc",
      via: "#22d3ee",
      to: "#164e63",
    },
  },
  {
    id: 8,
    slug: "neptune",
    name: "Neptune",
    type: "Ice Giant",
    description:
      "The farthest major planet, known for strong winds and a deep blue color.",
    distanceFromSun: "4.5B km",
    moons: 16,
    colors: {
      from: "#93c5fd",
      via: "#2563eb",
      to: "#1e1b4b",
    },
  },
];

export type Planet = {
  id: number;
  slug: string;
  name: string;
  type: string;
  description: string;
  distanceFromSun: string;
  moons: number;
  colors: {
    from: string;
    via: string;
    to: string;
  };
};
