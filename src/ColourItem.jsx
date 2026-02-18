function ColourItem(props) {
  return (
    <li style={{ color: props.naam.toLowerCase(), padding: '5px' }}>
      {props.naam} (This colour is {props.naam})
    </li>
  );
}
export default ColourItem;