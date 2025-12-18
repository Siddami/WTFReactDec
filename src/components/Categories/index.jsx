import "./Categories.css";
import data from "../../data/categories.json";

const Categories = () => {
  return (
    <>
      <section className="categories-section">
        <div className="categories-header">
          <p className="heading">Categories</p>
          <h2>Browse By Categories</h2>
        </div>
        <div className="categories-container">
          {data.categories.map((item, index) => {
            return (
              <div key={index} className={`${item.bg} category-card`}>
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`category-image ${item.color}`}
                />
                <h3 className="category-title">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categories;
