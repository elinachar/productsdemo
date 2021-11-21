import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayProductPrices = () => {
  const [product, setProduct] = useState({})
  const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        const url = window.location.pathname + ".json"

        axios.get(url)
        .then( (resp) => {
            setProduct(resp.data)
            setLoaded(true)
        })
        .catch( data => {
            console.log('Error', data)
        })
    }, [])

    if (loaded) {
        return(
            <div>
                <p>
                    <strong>Initial price: </strong> 
                    {product.initial_price}&euro;
                </p>
        
                <p>
                    <strong>Final price: </strong>
                    {product.final_price}&euro;
                </p>
            </div>
          )
    } else {
        return(
            <div>
                There was an error on displaying the prices of the product
            </div>
        )
    }

}

export default DisplayProductPrices;

