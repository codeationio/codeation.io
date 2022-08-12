import { FCC } from 'globalTypes';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  shadow?: boolean;
};

const Card: FCC<CardProps> = ({ children, className, id, shadow, ...props }) => {
  return (
    <article className={`rounded-lg${shadow ? ' shadow-card ' : ''}${className}`} id={id} {...props}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  className: '',
  shadow: true,
};

export const CardTitle: FCC = ({ children, className }) => {
  return (
    <h2 className={`mt-4 text-center text-card-title-sm capitalize text-primary xl:mb-3 xl:text-card-title ${className ?? ''}`}>
      {children}
    </h2>
  );
};

export const CardDescription: FCC<{ className?: string }> = ({ children, className }) => {
  return <summary className={`max-w-xs list-none text-left text-card-description text-description ${className}`}>{children}</summary>;
};

export default Card;
