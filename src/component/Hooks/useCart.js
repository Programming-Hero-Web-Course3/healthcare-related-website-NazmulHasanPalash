import { useState, useEffect } from 'react';
import { getServiceCart } from '../../utilities/fakeData';

const useCart = services => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (services.length) {
            const savedCart = getServiceCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedService = services.find(service => service.key === key);
                if (addedService) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedService.quantity = quantity;
                    storedCart.push(addedService);
                }
            }
            setCart(storedCart);
        }

    }, [services]);

    return [cart, setCart];
}

export default useCart;