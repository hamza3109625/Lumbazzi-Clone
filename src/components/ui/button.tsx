type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <div className="p-[0.5px] rounded-full bg-gradient-to-r from-gray-100 to-gray-700 inline-block">
      <button
        type={type}
        onClick={onClick}
        className={`
          font-playfair uppercase tracking-[0.25em] text-xs
          px-8 py-5 rounded-full bg-slate-900 text-white
          transition-all duration-300 ease-in-out
          hover:px-10 hover:font-bold
          ${className}
        `}
      >
        {children}
      </button>
    </div>
  );
}
