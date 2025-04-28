import { Cloud, CloudRain, CloudSun, Snowflake, Sun } from "lucide-react";

interface WeatherIconProps {
  weatherMain: string;
  size?: number;
}

export const WeatherIcon = ({ weatherMain, size = 72 }: WeatherIconProps) => {
  const responsiveSize =
    typeof window !== "undefined" && window.innerWidth < 640
      ? size * 0.8
      : size;

  switch (weatherMain.toLowerCase()) {
    case "rain":
    case "drizzle":
      return <CloudRain size={responsiveSize} className="text-blue-500" />;
    case "clear":
      return <Sun size={responsiveSize} className="text-yellow-500" />;
    case "clouds":
      return <Cloud size={responsiveSize} className="text-gray-500" />;
    case "snow":
      return <Snowflake size={responsiveSize} className="text-blue-200" />;
    case "thunderstorm":
      return <CloudRain size={responsiveSize} className="text-purple-500" />;
    case "mist":
    case "fog":
    case "haze":
      return <CloudSun size={responsiveSize} className="text-gray-400" />;
    default:
      return <CloudSun size={responsiveSize} className="text-gray-500" />;
  }
};

export default WeatherIcon;
