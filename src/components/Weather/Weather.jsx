import { Current } from '../Current/Current';

export const Weather = ({ weather = {}, isLoading }) => {
  const { current, daily, hourly } = weather;
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <Current current={current} />
    </>
  );
};
