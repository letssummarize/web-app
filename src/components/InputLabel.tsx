interface LabelProps {
  label: string;
  description?: string;
}

function InputLabel({ label, description }: LabelProps) {
  return (
    <div className='mb-4 flex flex-col gap-2'>
      {label && (
        <label className="text-white text-sm font-medium">{label}</label>
      )}
      {description && (
        <p className="text-gray-400 text-xs">{description}</p>
      )}
    </div>
  )
}

export default InputLabel;