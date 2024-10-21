// children and bg are props for the wrapper component(Card), bg will be gray by default if bg is not parsed
const Card = ({ children, bg = "bg-gray-200" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
