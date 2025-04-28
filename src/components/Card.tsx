import {
  CloudSun,
  Droplets,
  MapPin,
  RefreshCw,
  Thermometer,
  Wind,
} from "lucide-react";
import { formatDate } from "../lib/utils";
import { WeatherData } from "../types/weather";
import WeatherIcon from "./Icons";

interface WeatherCardProps {
  data: WeatherData | null;
  loading: boolean;
  onRefresh: () => void;
  emptyState?: boolean;
}

const WeatherCard = ({
  data,
  loading,
  onRefresh,
  emptyState = false,
}: WeatherCardProps) => {
  if (emptyState) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[150px] sm:min-h-[200px] md:min-h-[250px] text-center">
        <CloudSun size={48} className="text-gray-400 mb-3 sm:mb-4" />
        <p className="text-xl sm:text-2xl font-medium">
          No weather data available
        </p>
        <p className="text-sm sm:text-base opacity-70 mt-1 sm:mt-2">
          Try searching for a city
        </p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div>
      {/* Header section - Location and date */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <MapPin size={24} className="text-blue-600 flex-shrink-0" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
            {data.name}, {data.sys.country}
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
          <button
            onClick={onRefresh}
            className="p-1.5 sm:p-2 hover:bg-white/20 rounded-full"
            aria-label="Refresh weather data"
            disabled={loading}
          >
            <RefreshCw
              size={18}
              className={`${loading ? "animate-spin" : ""}`}
            />
          </button>
          <p className="text-xs sm:text-sm md:text-base opacity-70">
            {formatDate()}
          </p>
        </div>
      </div>

      {/* Weather main section - Icon and temperature */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-6">
        <div className="flex flex-col items-center mb-2 sm:mb-0">
          <div className="relative">
            <WeatherIcon weatherMain={data.weather[0]?.main || "Clear"} />
            {loading && (
              <div
                data-testid="skeleton-loader"
                className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full"
              >
                <RefreshCw size={24} className="animate-spin text-blue-500" />
              </div>
            )}
          </div>
          <p className="text-lg sm:text-xl capitalize mt-2 sm:mt-3">
            {data.weather[0]?.description || "N/A"}
          </p>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold">
            {Math.round(data.main.temp)}°C
          </p>
          <p className="text-base sm:text-lg opacity-70 mt-1 sm:mt-2">
            Feels like {Math.round(data.main.feels_like)}°C
          </p>
        </div>
      </div>

      {/* Weather details grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6">
        <div className="flex flex-col items-center p-2 sm:p-3">
          <Droplets
            size={24}
            className="text-blue-500 sm:text-3xl md:text-4xl"
          />
          <p className="mt-2 sm:mt-3 font-semibold text-base sm:text-lg">
            {data.main.humidity}%
          </p>
          <p className="text-xs sm:text-sm opacity-70">Humidity</p>
        </div>

        <div className="flex flex-col items-center p-2 sm:p-3">
          <Wind size={24} className="text-blue-500 sm:text-3xl md:text-4xl" />
          <p className="mt-2 sm:mt-3 font-semibold text-base sm:text-lg">
            {data.wind.speed} m/s
          </p>
          <p className="text-xs sm:text-sm opacity-70">Wind</p>
        </div>

        <div className="flex flex-col items-center p-2 sm:p-3">
          <Thermometer
            size={24}
            className="text-red-500 sm:text-3xl md:text-4xl"
          />
          <p className="mt-2 sm:mt-3 font-semibold text-base sm:text-lg">
            {Math.round(data.main.temp_max)}°C
          </p>
          <p className="text-xs sm:text-sm opacity-70">High</p>
        </div>

        <div className="flex flex-col items-center p-2 sm:p-3">
          <Thermometer
            size={24}
            className="text-blue-500 sm:text-3xl md:text-4xl"
          />
          <p className="mt-2 sm:mt-3 font-semibold text-base sm:text-lg">
            {Math.round(data.main.temp_min)}°C
          </p>
          <p className="text-xs sm:text-sm opacity-70">Low</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
