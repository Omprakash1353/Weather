const WeatherSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6 sm:space-y-8">
      {/* Header skeleton */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-32 sm:w-40 md:w-48 h-6 sm:h-7 md:h-8 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
          <div className="w-24 sm:w-28 md:w-32 h-4 sm:h-5 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Weather main skeleton */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 md:mb-10 gap-4">
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-full"></div>
          <div className="w-24 sm:w-28 md:w-32 h-5 sm:h-6 bg-gray-300 rounded mt-2 sm:mt-3"></div>
        </div>

        <div className="text-center sm:text-right">
          <div className="w-20 sm:w-24 md:w-28 h-12 sm:h-14 md:h-16 bg-gray-300 rounded mx-auto sm:ml-auto sm:mr-0"></div>
          <div className="w-28 sm:w-32 md:w-36 h-4 sm:h-5 bg-gray-300 rounded mt-1 sm:mt-2 mx-auto sm:ml-auto sm:mr-0"></div>
        </div>
      </div>

      {/* Weather details skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center p-2 sm:p-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full"></div>
            <div className="w-10 sm:w-12 md:w-16 h-4 sm:h-5 md:h-6 bg-gray-300 rounded mt-2 sm:mt-3"></div>
            <div className="w-14 sm:w-16 md:w-20 h-3 sm:h-4 bg-gray-300 rounded mt-1 sm:mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSkeleton;
