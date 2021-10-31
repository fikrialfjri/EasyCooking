import React from 'react'
import { Card } from 'react-bootstrap';

export default function CategoryCard({ category }) {
  const imageThumbnail = (categoryName) => {
    console.log(categoryName);
    switch (categoryName) {
      case "Beef":
        return "https://images.pexels.com/photos/618773/pexels-photo-618773.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      case "Breakfast":
        return "https://images.pexels.com/photos/3838628/pexels-photo-3838628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      case "Chicken":
        return "https://images.pexels.com/photos/9967258/pexels-photo-9967258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      case "Dessert":
        return "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      case "Goat":
        return "https://mmc.tirto.id/image/otf/500x0/2017/08/30/Ilustrasi-daging-kambing--ISTOCK_ratio-16x9.jpg"
      case "Lamb":
        return "https://www.simplyrecipes.com/thmb/sN5DV4PUSbqNW4lxBNjnTUvmaFk=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__02__Rosemary-Lamb-Chops-LEAD-2-4b70775441df47848c0b4352446bac77.jpg"
      case "Miscellaneous":
        return "https://kiowacountypress.net/sites/default/files/promo_64j1_miscellaneous_-_food_basket_donation_box_hands_welfare_people_-_istock_-_mukhina1.jpg"
      case "Pasta":
        return "https://images.pexels.com/photos/6287527/pexels-photo-6287527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      case "Pork":
        return "https://assets.bonappetit.com/photos/5c004e76037f9b5d60b6ca3d/1:1/w_2560%2Cc_limit/bone-in-pork-loin.jpg"
      case "Seafood":
        return "https://images.pexels.com/photos/3649208/pexels-photo-3649208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      case "Side":
        return "https://img.taste.com.au/zAi0G-Mm/taste/2016/11/top-50-side-dishes-117781-1.jpeg"
      case "Starter":
        return "https://images.immediate.co.uk/production/volatile/sites/2/2017/08/Tomato-Cover-V2.jpg?quality=90&resize=768%2C574"
      case "Vegan":
        return "https://annelinawaller.com/wp-content/uploads/2020/01/best-healthy-food-in-canggu.jpg"
      case "Vegetarian":
        return "https://lh3.googleusercontent.com/proxy/b3v16eSoQ2c4i12fhgabBSpU-O_7pcZ0JN83ebNebYalpigTi1nPvhNDL7rojH4Qy1Ds5nU25nsT5mCiriKbNMLHSiQmlBlhSkRw2aic6R9Jvi0BGsGXRDsRVYU"
      default:
        break;
    }
  }

  return (
    <div className="item bg-dark text-white rounded-2" style={{ height: 200 }}>
      <Card.Img src={imageThumbnail(category.strCategory)} alt={`${category.strCategory} Image`} fluid />
      <Card.ImgOverlay>
        <Card.Title className="p-2 rounded-2 text-center position-absolute" style={{ backgroundColor: "#FB7600" }}>{category.strCategory}</Card.Title>
      </Card.ImgOverlay>
    </div>
  )
}
