import { useState } from "react";

export default function Basket(props) {

    let [products, setProduct] = useState(props.initProducts)


    function contains(arr, elem) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == elem) {
                return true;
            }
        }
        return false;
    }

    function DelProduct(id) {
        setProduct(products.map(product => {
            if (product.id == id && contains(props.user.basket, id)) {
                let copy = Object.assign({}, props.user)
                for (let i = 0; i < copy.basket.length; i++ ) {
                    if (copy.basket[i] === id) {
                        copy.basket.splice(i, 1)
                    }
                }
                props.setUser(copy)
            }
            return product
        }))
    }

    function setNum(num, id) {
        props.setProducts.map(product => {
            if (product.id === id) {
                product.num = num
            }
            return product
        })
    }

    let result = products.map(product => {
        if (contains(props.user.basket, product.id)) {
            console.log(props.user.basket);
          return <div key={product.id} className="block">
           <h1 className="title">{product.name}</h1>
            <p className="text">Описание:{product.description}</p>
            <p className="text">Цена:{product.price}</p>
            {props.user !== null ?  <label htmlFor="Num">Кол-во: </label>: ''}
            {props.user !== null ?  <input id="Num" type='number' value={product.num} onChange={(event)=> {setNum(event.target.value, product.id)}}/>: ''}
            {props.user !== null ?  <button onClick={() => DelProduct(product.id)}>Удалить с корзины</button>: ''}
        </div>   
        } else return ''
    })

    return <div>{result}
    <button>Add to buycart</button>
    </div>
}