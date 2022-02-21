import React from 'react';
import ProductCard from './components/ProductCard';
import './Productos.scss'
import { Link, useNavigate } from 'react-router-dom'

function Productos(props) {

    let productos = [
        {
            "productId": 0,
            "name": "Mando PS4",
            "price": 10,
            "timeUnit": "h",
            "currency": "€",
            "collateral": 50,
            "timeLimit": 3,
            "timeLimitUnit": "days",
            "status": "As new",
            "description": " Se alquila con cable de carga",
            "image": "https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
            "productId": 1,
            "name": "Raqueta Pádel",
            "price": 7,
            "timeUnit": "d",
            "currency": "€",
            "collateral": 30,
            "timeLimit": 5,
            "timeLimitUnit": "days",
            "status": "Utilizable",
            "description": "Raqueta de pádel para iniciados",
            "image": "https://images.pexels.com/photos/4536850/pexels-photo-4536850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
            "productId": 2,
            "name": "Taladro DeWalt",
            "price": 12,
            "timeUnit": "d",
            "currency": "€",
            "collateral": 45,
            "timeLimit": 1,
            "timeLimitUnit": "day",
            "status": "Con desperfectos",
            "description": "El taladro se entrega con brocas para madera y de hormigón",
            "image": "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
            "productId": 3,
            "name": "Pack 10 Sillas",
            "price": 10,
            "timeUnit": "d",
            "currency": "€",
            "collateral": 50,
            "timeLimit": 3,
            "timeLimitUnit": "days",
            "status": "As new",
            "description": "Colores disponibles: Blanco y negro",
            "image": "https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "productId": 4,
            "name": "Raqueta Pádel",
            "price": 7,
            "timeUnit": "d",
            "currency": "€",
            "collateral": 30,
            "timeLimit": 5,
            "timeLimitUnit": "days",
            "status": "Utilizable",
            "description": "Raqueta de pádel para iniciados",
            "image": "https://images.pexels.com/photos/4536850/pexels-photo-4536850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
            "productId": 5,
            "name": "Taladro DeWalt",
            "price": 5,
            "timeUnit": "d",
            "currency": "€",
            "collateral": 45,
            "timeLimit": 1,
            "timeLimitUnit": "day",
            "status": "Con desperfectos",
            "description": "El taladro se entrega con brocas para madera y de hormigón",
            "image": "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
            "productId": 6,
            "name": "Mando PS4",
            "price": 10,
            "timeUnit": "h",
            "currency": "€",
            "collateral": 50,
            "timeLimit": 3,
            "timeLimitUnit": "days",
            "status": "As new",
            "description": " Se alquila con cable de carga",
            "image": "https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
            "productId": 7,
            "name": "Raqueta Pádel",
            "price": 7,
            "timeUnit": "d",
            "currency": "€",
            "collateral": 30,
            "timeLimit": 5,
            "timeLimitUnit": "days",
            "status": "Utilizable",
            "description": "Raqueta de pádel para iniciados",
            "image": "https://images.pexels.com/photos/4536850/pexels-photo-4536850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
            "productId": 8,
            "name": "Taladro DeWalt",
            "price": 5,
            "timeUnit": "d",
            "currency": "€",
            "collateral": 45,
            "timeLimit": 1,
            "timeLimitUnit": "day",
            "status": "Con desperfectos",
            "description": "El taladro se entrega con brocas para madera y para hormigón",
            "image": "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },

    ]

    let navigate = useNavigate()


    return (
        <div className="products-container" >

            <h1>Productos recientes</h1>
            <div className="products-grid">
                {/* <app-product-card [product]="product" *ngFor="let product of products">
            <!-- <a routerLink="/product-details/{{product.productId}}"></a> --> */}
                {productos.map((producto) => {
                    return (
                        <ProductCard
                            name={producto.name}
                            price={producto.price}
                            timeUnit={producto.timeUnit}
                            currency={producto.currency}
                            collateral={producto.collateral}
                            timeLimit={producto.timeLimit}
                            timeLimitUnit={producto.timeLimitUnit}
                            description={producto.description}
                            status={producto.status}
                            image={producto.image}
                            onClick={() => navigate(`/product-details/${producto.productId}`)}
                        />



                    )
                })}

            </div>


        </div >
    );
}

export default Productos;