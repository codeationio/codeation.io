import { FC } from 'react';

type Props = {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  error?: string;
};

const Input: FC<Props> = ({ error, name, placeholder, required = false, type }) => {
  return (
    <div className="w-full">
      <input
        className="w-full border-b border-grey bg-light-grey py-3 font-khula text-secondary outline-0"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
      {error && <p className="w-full text-sm text-error">{error}</p>}
    </div>
  );
};

export default Input;
