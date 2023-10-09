import { FaStar } from 'react-icons/fa';

export const starRating = (starNumber: number): JSX.Element[] => {

  const times = parseInt(String(starNumber / 2))
  const stars: JSX.Element[] = [];

  for (let i = 0; i < times; i++) {
    stars.push(<FaStar key={i} />);
  }

  return stars;
};