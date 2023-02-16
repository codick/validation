import { useState } from "react";

export default function Home(props) {

    let [products, setProduct] = useState(props.initProducts)


    function contains(arr, elem) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === elem) {
                return true;
            }
        }
        return false;
    }

    function AddProduct(id) {
        setProduct(products.map(product => {
            if (product.id == id && !contains(props.user.basket, id)) {
                let copy = Object.assign({}, props.user)
                copy.basket.push(id)
                props.setUser(copy)
                console.log(props.user.basket);
            }
            return product
        }))
    }

    let result = products.map(product => {
        return <div key={product.id} className="block">
            <h1 className="title">{product.name}</h1>
            <p className="text">Описание:{product.description}</p>
            <p className="text">Цена:{product.price}</p>
            {props.user !== null ?  <button onClick={() => AddProduct(product.id)}>Добавить в корзину</button>: ''}
        </div>
    })

    return result
}