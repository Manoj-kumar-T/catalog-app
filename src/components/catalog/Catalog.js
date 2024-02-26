const Catalog = ({ title, desc, image }) => {
  return (
    <div className="p-2 bg-secondary rounded">
      <img
        src={image}
        className="w-100"
        style={{ height: "330px", objectFit: "contain" }}
      />
      <h2>{title}</h2>
      <h5>{desc}</h5>
    </div>
  );
};

export default Catalog;
