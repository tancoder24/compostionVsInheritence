function FancyBorder(props) {
    return (
      <div>
        {props.children}
        {props.left}
        {props.right}
        
      </div>
    );
  }

export default FancyBorder;