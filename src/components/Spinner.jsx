import { BounceLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <BounceLoader
      color="#000"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
