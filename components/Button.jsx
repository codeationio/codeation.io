

const Button = ({ className, type, children, onClick }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick} >
        {children}
      </button>
    </>
  );
};

export default Button;
