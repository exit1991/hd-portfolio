import { Poiret_One, Noto_Sans_JP } from "next/font/google";

export const poiretOne = Poiret_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poiret-one",
  display: "swap",
});

export const notojp = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});
