import Catalog from "../catalog/Catalog";

const List = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className="row">
      {blogs.map((blog) => [
        <div className="col-lg-3 mb-3">
          <Catalog {...blog} />
        </div>,
      ])}
    </div>
  );
};

export default List;
