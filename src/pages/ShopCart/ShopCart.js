import { useOutletContext } from "react-router-dom";
import CartList from "../../components/List/CartList/CartList";
import { convertStringToNumberFormat } from '../../utils/functions';
import WompiButton from "../../components/Buttons/WompiButton/WompiButton";
const ShopCart = () => {
    const outletContext = useOutletContext();
    console.log("context ", outletContext)
    return (
        <div>
            <CartList products={outletContext.products} />
            <div className="shop-cart__total-container"> <div className="total">Total:</div>   <h3>{convertStringToNumberFormat(outletContext.totalPrice)}</h3>  </div>
            <WompiButton />
        </div>

    )
};

export default ShopCart;