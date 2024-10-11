import Button from "@mui/material/Button";
const Buttons = ({ val, name, fn, prod_id }) => {
  function fun1() {
    fn(val, prod_id);
  }
  if (val === "+")
    return (
      <div>
        <Button
          variant="contained"
          style={{ background: "#007bff" }}
          onClick={fun1}
          id={prod_id}
        >
          {name}
        </Button>
      </div>
    );
  else
    return (
      <div>
        <Button
          variant="contained"
          style={{ background: "#007bff"}}
          onClick={fun1}
          id={prod_id}
        >
          {name}
        </Button>
      </div>
    );
};
export default Buttons;
