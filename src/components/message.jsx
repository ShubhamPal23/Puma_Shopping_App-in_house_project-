const Message = ({ classname = "Message", val, heading = 1 }) => {
    const style = { textAlign: "center" }; // Common style for center alignment
  
    if (heading === 1) {
      return <h1 style={style}>{classname}</h1>;
    } else if (heading === 2) {
      return (
        <h2 style={style}>
          {classname} {val}
        </h2>
      );
    } else if (heading === 5) {
      return (
        <h5 style={style}>
          {classname} {val}
        </h5>
      );
    }
  
    return null;
  };
  
  export default Message;
  
