import { FC } from 'react';

type Props = {
  type: string;
  name: string;
  placeholder: string;
};

const Input: FC<Props> = ({ name, placeholder, type }) => {
  return (
    <input
      className="w-full border-b border-grey bg-light-grey py-3 font-khula text-secondary outline-0 lg:w-auto"
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
