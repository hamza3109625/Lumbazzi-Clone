type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function BlackButton({
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group
        relative inline-flex items-center justify-center
        px-8 py-5 rounded-full text-white uppercase tracking-[0.25em] text-xs font-medium
        bg-white border border-transparent
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-r before:from-white/40 before:to-white/10
        before:content-[''] before:z-[-1] before:p-[1px]
        hover:before:from-white/60 hover:before:to-white/30
        transition-all duration-300 ease-in-out
        ${className}
      `}
    >
      {children}
    </button>
  );
}
