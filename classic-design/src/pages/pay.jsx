import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import StripeCheckout from 'react-stripe-checkout'



// eslint-disable-next-line react-hooks/rules-of-hooks

const pay = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [stripeToken, setStrikeToken] = useState(null)
    const onToken = (token) => {
        setStrikeToken(token)
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    'http://localhost:5000/api/checkout/payment',
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken])
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <StripeCheckout
                name="Classic shop"
                image=""
                billingAddress
                shippingAddress
                description="Your total is 20Rs"
                amount={200}
                token={onToken}
                stripeKey="pk_test_51LQ9JfSBfNSorDV7IRbz8kMSMAWJ5Kj5nnua4DFoGwF6kC4QEymmabhfmlzaW3IVDucpRNnhOrfL6ZpbIHJcbW4U00rD9MDqTw"
            >

                <button className="bg-black p-6 rounded-lg text-white">
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    )
}

export default pay;