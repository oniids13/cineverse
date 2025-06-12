const Input = ({ placeholder }) => {
  return (
    <input
      className="w-100 h-15 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
