import { Header } from "../components/Header/Header"
import { Card } from "..//components/Card/Card"
import { cardArray } from "./constants"

export const Home = () => {
    return (
        <>
            <Header />
            <section>
                <div class="search">
                    <div class="container">
                        <div class="search-box">
                            <input type="text" />
                            <button class="btn btn-primary search-btn">
                                <img class="search-btn_icon" src="/images/search.svg" alt="searchIcon" />
                                <span class="search-btn_text">Найти</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="container">
                        <div class="content-box">
                            <div class="content-main">
                                <h2 class="content-main_title">
                                    Рекомендации для вас
                                </h2>
                                <div class="content-main_list">
                                    {cardArray.map((item) => (
                                        <Card
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            adress={item.adress}
                                            date={item.date}
                                            image={item.image}
                                        />
                                    ))}


                                </div>
                            </div>
                            <div class="content-side">
                                <div class="content-side_list">
                                    <h3 class="content-side_title">Сервисы и услуги</h3>
                                    <div class="content-side_box">
                                        <div class="content-side-list-item">
                                            <img class="content-side-list-item_image" src="/images/delivery.svg" alt="delivery" />
                                            <h5 class="content-side-list-item_title">Доставка </h5>
                                            <p class="content-side-list-item_text"> Проверка при получении и возможность
                                                бесплатно
                                                вернуть товар</p>
                                        </div>
                                        <div class="content-side-list-item">
                                            <img class="content-side-list-item_image" src="/images/car.svg" alt="car" />
                                            <h5 class="content-side-list-item_title">Автотека </h5>
                                            <p class="content-side-list-item_text">Отчёт с историей авто: пробег, владельцы,
                                                сведения о залоге, ДТП и ремонтах</p>

                                        </div>
                                        <div class="content-side-list-item">
                                            <img class="content-side-list-item_image" src="/images/house.svg" alt="house" />
                                            <h5 class="content-side-list-item_title">Онлайн-бронирование жилья </h5>
                                            <p class="content-side-list-item_text">Посуточная аренда квартир и домов: большой
                                                выбор
                                                вариантов для поездок по России</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="content-side_footer">
                                    <p class="content-side_footer--item">© ООО «Абито», 2011–2021</p>
                                    <a class="content-side_footer--item" href="#!">Политика конфиденциальности</a>
                                    <a class="content-side_footer--item" href="#!">Обработка данных</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )

}