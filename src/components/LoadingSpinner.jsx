const LoadingSpinner = ({ size = "large", text = "Loading..." }) => {
  const spinnerSizes = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div
          className={`${spinnerSizes[size]} border-4 border-gray-200 border-t-4 border-t-secondary rounded-full animate-spin`}
        ></div>
        <div
          className={`absolute inset-0 ${spinnerSizes[size]} border-4 border-transparent border-r-4 border-r-tertiary rounded-full animate-spin`}
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
      <p className="mt-4 text-gray-600 text-lg font-medium">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
