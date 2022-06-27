import "../App.css";

const Logo = (props) => {
  return (
		<div className={`Logo-${ props.name }`}>
      <h2>Your Logo</h2>
    </div>
  );
};
export default Logo;
