export const Weather = ({ city, weather }) => {
  return (
    <>
      <h3>{city}</h3>
      <p>{JSON.stringify(weather, '\n', 6)}</p>
    </>
  );
};
