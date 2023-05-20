/* eslint-disable react/prop-types */
const SmallHeading = ({ children, className }) => {
  return (
    <h2 className={`text-white font-semibold text-35 ${className}`}>
      {children}
    </h2>
  );
};

export default SmallHeading;
