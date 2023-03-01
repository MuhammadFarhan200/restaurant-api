const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const restaurant = [
  {
    "id": 1,
    "restaurant_name": "Peking Hor  s D'oeuvre",
    "restaurant_address": "1234 Main Street",
    "restaurant_city": "New York",
    "data": [
      {
        "foods": [
          {
            "id": 1,
            "food_name": "Hors d'oeuvres",
            "food_image": "https://asset.kompas.com/crops/QeIh8K69PV6aImLjg-71LU8i5ds=/63x35:943x622/750x500/data/photo/2021/12/09/61b17b708bfb3.jpg",
            "food_price": "Rp. 150.000.00",
          }, 
          {
            "id": 2,
            "food_name": "Amuse-bouche",
            "food_image": "https://asset.kompas.com/crops/_1ATzeSFjUNIopEuwToM5vq3poo=/50x60:850x594/750x500/data/photo/2021/12/09/61b17be84f720.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 3,
            "food_name": "Sup",
            "food_image": "https://asset.kompas.com/crops/94nQD1EAzV844CTyQtBHII2JAJA=/0x68:1179x854/750x500/data/photo/2021/04/26/60860684bff18.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 4,
            "food_name": "Appetizer",
            "food_image": "https://asset.kompas.com/crops/lIjufSaA8AOQiSxLvsCr9T4FjCQ=/32x6:1000x652/750x500/data/photo/2021/12/09/61b17c94a0810.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 5,
            "food_name": "Salad",
            "food_image": "https://asset.kompas.com/crops/qTXcyWnCBVUNHJnX6MooX4E5tgU=/114x0:1701x1058/750x500/data/photo/2021/02/09/60222ba484230.jpeg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 6,
            "food_name": "Ikan",
            "food_image": "https://asset.kompas.com/crops/fl7dGjvTEXjia5weFSYa_y7rRAk=/0x0:1000x667/750x500/data/photo/2021/06/21/60d032db027c1.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 7,
            "food_name": "First main course",
            "food_image": "https://asset.kompas.com/crops/gUV1fMVRPgczTocdI6rcPDTnJFc=/100x67:900x600/750x500/data/photo/2021/07/17/60f2b8d0c1a89.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 8,
            "food_name": "Palate cleanser",
            "food_image": "https://asset.kompas.com/crops/qrx9lTr6OSi1qJ_OaJBGGqi7J7g=/0x0:1000x667/750x500/data/photo/2021/07/17/60f2a8cfb2c9b.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 9,
            "food_name": "Second main course",
            "food_image": "https://asset.kompas.com/crops/GzHYx9YsIAfNcJlFDzd60Zwu0hM=/0x0:1000x667/750x500/data/photo/2021/07/18/60f40dc4f1b44.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 10,
            "food_name": "Dessert",
            "food_image": "https://asset.kompas.com/crops/oM6wJ2Uf7tphBeIReWx9EY7T96U=/26x36:1357x923/750x500/data/photo/2021/01/05/5ff498f8d34af.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 11,
            "food_name": "Mignardise",
            "food_image": "https://asset.kompas.com/crops/eM1CWvjJQ8adcTIvHGcLKwXB87M=/0x0:1000x667/750x500/data/photo/2021/10/27/6178b4b7cf154.jpeg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 12,
            "food_name": "Baked salmon",
            "food_image": "https://asset.kompas.com/crops/rFoP1sNYw9cnRClYgqUYF9FKWL0=/0x53:1191x847/750x500/data/photo/2021/02/09/60225ac822621.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 13,
            "food_name": "Pesto chicken baked",
            "food_image": "https://asset.kompas.com/crops/WG0HBHsYEVx3G7EjN9KWqP2JnGI=/0x37:1280x890/750x500/data/photo/2021/02/09/602264bda959b.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 14,
            "food_name": "Lobster Mac And Cheese",
            "food_image": "https://asset.kompas.com/crops/gbIv6qToLSJ1Y-x7WmpbIfrtLA0=/0x0:5472x3648/750x500/data/photo/2021/02/09/60226edf032e0.jpg",  
            "food_price": "Rp. 150.000.00",
          },
          {
            "id": 15,
            "food_name": "Shoyu Ramen",
            "food_image": "https://asset.kompas.com/crops/EZQaX65S9BeMXb4JNfUURfkYLeE=/0x269:1280x1123/750x500/data/photo/2021/01/05/5ff3e7e538bde.jpg",  
            "food_price": "Rp. 150.000.00",
          },
        ],
        "drinks": [
          {
            "id": 1,
            "drink_name": "Ice Blend",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/ice-blend-coffee-bean.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 2,
            "drink_name": "Ice Drink",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/ice-drink-4.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 3,
            "drink_name": "Milk Shake",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/milkshake-4.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 4,
            "drink_name": "Fruit Tea",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/fruit-tea-2.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 5,
            "drink_name": "Flavoured Tea",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/hot-tea1.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 6,
            "drink_name": "Flavoured Soda",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/511627718.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 7,
            "drink_name": "Latte",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/511627718.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 8,
            "drink_name": "Macchiato",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/starbucks-iced-hazelnut-macchiato.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 9,
            "drink_name": "Mocktail",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/mocktails2.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 10,
            "drink_name": "Cocktail",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/central-bar-cocktails.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 11,
            "drink_name": "Mojito",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/smirnoff-apple-mojito-white-stores-alternative-cocktail-recipe-drink.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 12,
            "drink_name": "Hot Tea",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/smirnoff-apple-mojito-white-stores-alternative-cocktail-recipe-drink.jpg",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 13,
            "drink_name": "Smoothie",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/smoothie.jpg?resize=750%2C563&ssl=1",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 14,
            "drink_name": "Hot Chocolate",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/hot-chocolate-e1416083854420.jpg?resize=375%2C375&ssl=1",
            "drink_price": "Rp. 40.000.00",
          },
          {
            "id": 15,
            "drink_name": "Fruit Yogurt",
            "drink_image": "https://i0.wp.com/indobubbletea.blog/wp-content/uploads/2014/11/yogurt-3.jpg?resize=600%2C450&ssl=1",
            "drink_price": "Rp. 40.000.00",
          },
        ],
      }
    ]
  }
];

router.get('/restaurant', (req, res) => {
  res.send(restaurant);
});

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
  console.log('Open Result: http://localhost:3000/.netlify/functions/api/restaurant');
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);