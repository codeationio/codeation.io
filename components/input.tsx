import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string;
  error?: string;
  variant?: 'filled' | 'outlined';
};

const variantClasses = {
  filled: 'h-full rounded-l-lg px-3.5 text-description',
  outlined: 'border-b border-grey bg-light-grey p-2 pl-3 pt-4 text-secondary',
};

const Input: FC<Props> = ({ className, error, variant, ...props }) => {
  console.log('🚀 ~ file: input.tsx ~ line 15 ~ error', error);
  return (
    <div className="w-full">
      <input className={`w-full font-khula outline-none ${variantClasses[variant]} ${className}`} {...props} />
      {error && <p className="m-2 w-full text-center text-sm text-error">{error}</p>}
    </div>
  );
};

Input.defaultProps = {
  variant: 'outlined',
};

export default Input;
