import type { FCC } from 'globalTypes';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  loading?: boolean;
};

const Button: FCC<ButtonProps> = ({ children, disabled, loading, type }) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded bg-primary py-4 text-center text-xl text-white disabled:cursor-not-allowed disabled:bg-opacity-60"
      disabled={loading || disabled}
      type={type}>
      {loading && (
        <svg className="mr-3 h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
