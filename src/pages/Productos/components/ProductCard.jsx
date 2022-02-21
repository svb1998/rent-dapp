import React from 'react';
import './ProductCard.scss'
import favIcon from '../../../assets/icons/fav-icon.svg'


function ProductCard({ onClick, name, price, image, currency, timeUnit, collateral, timeLimit, timeLimitUnit, status, description }) {
    return (


        <div className="product-card" onClick={onClick}>
            <div className="product-image" style={{ 'backgroundImage': '  url(' + image + ')' }}>

                <button className="fav-button">
                    <img className="fav-icon" src={favIcon} alt="fav icon" />

                </button>
            </div>
            <div className="product-description">
                <h3 className="product-title">{name}</h3>
                <h3 className="product-price">{price} {currency}/{timeUnit}</h3>
                <div className="product-data">

                    <div className="product-feature-container fianza">
                        <p><strong>Fianza</strong></p>
                        <p className="product-feature">{collateral}{currency}</p>
                    </div>
                    <div className="product-feature-container max">
                        <p><strong>Máx</strong></p>
                        <p className="product-feature">{timeLimit} {timeLimitUnit}</p>
                    </div>
                    <div className="product-feature-container estado">
                        <p><strong>Estado</strong></p>
                        <p className="product-feature">{status}</p>
                    </div>

                    {/* <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur repudiandae
                            aspernatur
                            molestiae provident voluptatibus nemo non reiciendis. Commodi atque doloribus corrupti deleniti porro
                            earum
                            suscipit, labore
                            deserunt reiciendis ad qui, dolores facilis sequi nisi eaque, illo sed voluptatum temporibus in?</p> */}

                    <p className="description">{description}</p>


                </div>




            </div>
        </div>

    );
}

export default ProductCard;