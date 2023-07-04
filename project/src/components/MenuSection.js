import MenuDish from "./MenuDish";
import { useState } from "react";

const MenuSection = (Menu) => {
  const { title, itemCards, categories } = Menu?.card?.card;
  const categoryMenus = Menu?.card?.card?.categories;
  const [isActiveTitle, setIsActiveTitle] = useState(false);
  const [isActiveIndex, setActiveIndex] = useState([]);

  const handleToggle = (index) => {
    setIsActiveTitle(!isActiveTitle);
    const isActive = isActiveIndex.includes(index);
    const updatedIndices = isActive
      ? isActiveIndex.filter((item) => item !== index)
      : [...isActiveIndex, index];

      setActiveIndex(updatedIndices);
  };

  return !categoryMenus ? (
    <>
      <div className="menu-section">
        <h1
          className={`menu-title accordion-header ${isActiveTitle ? "open" : ""}`}
          onClick={handleToggle}
        >
          {title} ({itemCards?.length})
        </h1>
        {isActiveTitle && (
          <div
            className={`menu-list accordion-child open`}
          >
            {itemCards.map((itemCard) => {
              return <MenuDish {...itemCard} key={itemCard?.card?.info?.id} resKey={Menu.resKey}/>;
            })}
          </div>
        )}
      </div>
    </>
  ) : (
    <>
      <div className="menu-section">
        <h1 className="menu-title">{title}</h1>
        {categoryMenus.map(({ title, itemCards }, index) => {
          return (
            <div
              className={`menu-category accordion-header ${
                isActiveIndex.includes(index) ? "open" : ""
              }`}
              key={index}
              onClick={(e) => {
                handleToggle(index);
              }}
            >
              {title}({itemCards?.length})
              {isActiveIndex.includes(index) && (
                <div
                  className={`menu-list accordion-child open`}
                >
                  {itemCards.map((itemCard) => {
                    return (
                      <MenuDish {...itemCard } resKey={Menu.resKey} key={itemCard?.card?.info?.id}  />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuSection;
