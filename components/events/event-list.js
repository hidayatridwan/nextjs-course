function EventList(props) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
