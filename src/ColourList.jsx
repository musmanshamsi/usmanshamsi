import ColourItem from './ColourItem';

function ColourList(props) {
  return (
    <ul>
      {props.colourArray.map((item, index) => (
        <ColourItem key={index} naam={item} />
      ))}
    </ul>
  );
}
export default ColourList;