import proptypes from "prop-types";
function Students(props) {
  return (
    <div className="boarder">
      <p>Name:{props.name}</p>
      <p>School:{props.school}</p>
      <p>Age:{props.age}</p>
    </div>
  );
}
Students.propTypes = {
  name: proptypes.string,
  school: proptypes.string,
  age: proptypes.number,
};
Students.defaultProps = {
  name: "Guest",
  school: "No",
  age: 0,
};
export default Students;
