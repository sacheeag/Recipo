
import React, { useState } from "react";
import "./Page.css";

const RecipeCards = ({ image, title, time, rating, tags, users }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="recipe-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="recipe-image">
        <img src={image} alt={title} />
        <div className="user-avatars">
          {users.map((user, index) => (
            <img key={index} src={user} alt="User" className="avatar" />
          ))}
        </div>
        {isHovered && (
          <button className="view-recipe-btn">View Recipe</button>
        )}
      </div>
      <div className="recipe-info">
        <p className="tag">{tags}</p>
        <h3 className="title2">{title}</h3>
        <div className="bottom-section">
          <p className="time">{time} min</p>
          <div className="rating">
            ⭐ <span>{rating}</span>
          </div>
          <button className="favorite-btn">♡</button>
        </div>
      </div>
    </div>
  );
};



const RecipeCard = () => {
    const recipes = [
        {
          image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
          title: "Russian Salad",
          time: 40,
          rating: 4.5,
          tags: "Dairy Free",
          users: [
            "https://randomuser.me/api/portraits/thumb/men/1.jpg",
            "https://randomuser.me/api/portraits/thumb/women/2.jpg",
          ],
        },
        {
          image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
          title: "Pasta Carbonara",
          time: 30,
          rating: 4.7,
          tags: "Italian",
          users: [
            "https://randomuser.me/api/portraits/thumb/men/3.jpg",
            "https://randomuser.me/api/portraits/thumb/women/4.jpg",
          ],
        },
        {
          image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
          title: "Classic Cheeseburger",
          time: 25,
          rating: 4.3,
          tags: "American",
          users: ["https://randomuser.me/api/portraits/thumb/men/5.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
          title: "Sushi Platter",
          time: 50,
          rating: 4.8,
          tags: "Japanese",
          users: [
            "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            "https://randomuser.me/api/portraits/thumb/men/7.jpg",
          ],
        },
        {
          image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
          title: "Margherita Pizza",
          time: 35,
          rating: 4.6,
          tags: "Vegetarian",
          users: ["https://randomuser.me/api/portraits/thumb/women/8.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
          title: "Butter Chicken",
          time: 45,
          rating: 4.9,
          tags: "Indian",
          users: [
            "https://randomuser.me/api/portraits/thumb/men/9.jpg",
            "https://randomuser.me/api/portraits/thumb/women/10.jpg",
          ],
        },
        {
          image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
          title: "Tonkotsu Ramen",
          time: 40,
          rating: 4.7,
          tags: "Japanese",
          users: ["https://randomuser.me/api/portraits/thumb/men/11.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
          title: "Carne Asada Tacos",
          time: 20,
          rating: 4.4,
          tags: "Mexican",
          users: ["https://randomuser.me/api/portraits/thumb/women/12.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg",
          title: "Filet Mignon",
          time: 30,
          rating: 4.9,
          tags: "Keto",
          users: [
            "https://randomuser.me/api/portraits/thumb/men/13.jpg",
            "https://randomuser.me/api/portraits/thumb/women/14.jpg",
          ],
        },
        {
          image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg",
          title: "Acai Bowl",
          time: 10,
          rating: 4.2,
          tags: "Vegan",
          users: ["https://randomuser.me/api/portraits/thumb/women/15.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg",
          title: "Chicken Shawarma",
          time: 35,
          rating: 4.6,
          tags: "Middle Eastern",
          users: ["https://randomuser.me/api/portraits/thumb/men/16.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
          title: "Chicken Pho",
          time: 55,
          rating: 4.8,
          tags: "Vietnamese",
          users: ["https://randomuser.me/api/portraits/thumb/women/17.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
          title: "Mushroom Risotto",
          time: 45,
          rating: 4.5,
          tags: "Vegetarian",
          users: ["https://randomuser.me/api/portraits/thumb/men/18.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg",
          title: "Greek Moussaka",
          time: 60,
          rating: 4.7,
          tags: "Mediterranean",
          users: ["https://randomuser.me/api/portraits/thumb/women/19.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
          title: "Chicken Bulgogi",
          time: 40,
          rating: 4.6,
          tags: "Korean",
          users: ["https://randomuser.me/api/portraits/thumb/men/20.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
          title: "Pad Thai",
          time: 30,
          rating: 4.4,
          tags: "Thai",
          users: ["https://randomuser.me/api/portraits/thumb/women/21.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg",
          title: "Spaghetti Bolognese",
          time: 35,
          rating: 4.5,
          tags: "Italian",
          users: ["https://randomuser.me/api/portraits/thumb/men/22.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg",
          title: "Chicken Satay",
          time: 25,
          rating: 4.3,
          tags: "Indonesian",
          users: ["https://randomuser.me/api/portraits/thumb/women/23.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
          title: "Chicken Wellington",
          time: 90,
          rating: 4.9,
          tags: "British",
          users: ["https://randomuser.me/api/portraits/thumb/men/24.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg",
          title: "Chicken Tikka",
          time: 45,
          rating: 4.7,
          tags: "Indian",
          users: ["https://randomuser.me/api/portraits/thumb/women/25.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
          title: "Ratatouille",
          time: 50,
          rating: 4.6,
          tags: "French",
          users: ["https://randomuser.me/api/portraits/thumb/men/26.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg",
          title: "Chicken Fajitas",
          time: 30,
          rating: 4.4,
          tags: "Mexican",
          users: ["https://randomuser.me/api/portraits/thumb/women/27.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg",
          title: "Chicken Stroganoff",
          time: 40,
          rating: 4.5,
          tags: "Russian",
          users: ["https://randomuser.me/api/portraits/thumb/men/28.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
          title: "Pancake Stack",
          time: 20,
          rating: 4.3,
          tags: "Breakfast",
          users: ["https://randomuser.me/api/portraits/thumb/women/29.jpg"],
        },
        {
          image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
          title: "Chocolate Soufflé",
          time: 35,
          rating: 4.8,
          tags: "Dessert",
          users: ["https://randomuser.me/api/portraits/thumb/men/30.jpg"],
        }
      ];
  const recipeGroups = [];
  for (let i = 0; i < recipes.length; i += 4) {
    recipeGroups.push(recipes.slice(i, i + 4));
  }

  
  return (
    <div className="recipes-master-container">
      {recipeGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="recipe-row">
          {group.map((recipe, index) => (
            <RecipeCards
              key={index}
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
              rating={recipe.rating}
              tags={recipe.tags}
              users={recipe.users}
            />
          ))}
        </div>
              ))}
              </div>
            );
          };
          
          export default RecipeCard;
