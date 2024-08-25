type InputProps = {
  label: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  const { label, ...inputProps } = props;
  return (
    <div className="flex flex-col">
      <label className="text-slate-600">{label}</label>
      <input {...inputProps} className="border mt-1 p-2 rounded" />
    </div>
  );
}
