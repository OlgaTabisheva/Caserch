import './Card.css'

export const Card = ({ title, price, adress, date, image }) => {
    return (

        <a href="/product.html" class="content-main_list-item">
            <div class="content-main_list-item-image">
                <img src={image} alt="card-image" />
            </div>
            <h5 class="content-main_list-item-title">{title}</h5>
            <strong class="content-main_list-item-price">{price}</strong>
            <div class="content-main_list-item-desk-block">
                <span class="content-main_list-item-desk">{adress}</span>
                <span class="content-main_list-item-desk">{date}</span>

            </div>
        </a>

    )
}

