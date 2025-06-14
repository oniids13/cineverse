const Button = ({ text, children, btnType = "" }) => {
  return (
    <button
      type={btnType}
      className="flex items-center gap-1 border border-gray-300 rounded-lg px-4 py-2 mt-3 bg-gradient-to-r from-tertiary to-secondary text-light cursor-pointer"
    >
      {children} {text}
    </button>
  );
};

export default Button;
