type Props = {
  variant?: "primary" | "secondary";
};

type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  const color =
    variant === "primary"
      ? "bg-slate-800 hover:bg-slate-700 text-white"
      : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-700";
  return (
    <button {...props} className={`py-2 px-5 rounded ${color}`}>
      {props.children}
    </button>
  );
}
