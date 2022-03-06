import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

export default function CheckoutProduct({
    id,
    title,
    rating,
    price,
    description,
    category,
    image,
    hasPrime,
}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            rating,
            price,
            description,
            category,
            image,
            hasPrime,
        };

        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Mid */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => ( 
                        <StarIcon key={i} className="h-5 text-yellow-400"  />
                    ))
                    }
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="IDR" />

                {hasPrime && (
                <div className="flex space-x-2 items-center">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add To Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}
