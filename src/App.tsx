import { useState } from "react";
import WeatherCard from "./components/Card";
import ErrorMessage from "./components/ErrorMessage";
import { Footer } from "./components/Footer";
import WeatherSearch from "./components/Search";
import WeatherSkeleton from "./components/Skeleton";
import { useFetch } from "./hooks/useFetch";
import { WeatherData } from "./types/weather";

export default function Weather() {
  const [city, setCity] = useState("Mumbai");

  const { data, loading, error, refetch } = useFetch<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`
  );

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
  };

  const showSkeleton = loading;
  const showEmptyState = !data && !loading && !error;
  const displayData = data;

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-blue-900 to-zinc-950 p-3 sm:p-4 md:p-6 lg:p-8`}
    >
      <div className="bg-white/40 backdrop-blur-lg p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-gray-900 space-y-6 sm:space-y-8 relative overflow-hidden">
        <WeatherSearch onSearch={handleSearch} isLoading={loading} />

        <ErrorMessage message={error} />

        {showSkeleton ? (
          <WeatherSkeleton />
        ) : (
          <WeatherCard
            data={displayData}
            loading={loading}
            onRefresh={refetch}
            emptyState={showEmptyState}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}
