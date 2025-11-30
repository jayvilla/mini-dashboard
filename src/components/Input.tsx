interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input {...props} className="border p-2 rounded" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
