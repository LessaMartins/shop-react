const Stars = ({ rating = 0 }) => {
  return <p>{"⭐".repeat(rating)}</p>;
};

export default Stars;
