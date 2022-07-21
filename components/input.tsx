import { FC } from 'react';

type Props = {
  type: string;
  name: string;
  placeholder: string;
};

const Input: FC<Props> = ({ type, name, placeholder }) => {
  return (
    <input className='bg-light-grey border-b border-grey outline-0	py-3 text-secondary font-khula w-full	lg:w-auto' type={type} name={name} placeholder={placeholder}/>
  );
};

export default Input;