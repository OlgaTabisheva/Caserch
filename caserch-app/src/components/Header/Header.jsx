import './Header.css'
export const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header header-box">
                        <a href="/" className="header-logo">
                            <image src="/images/boxIcon.svg" alt="Caserch/" />
                            <span>Caserch</span>
                        </a>
                        <div className="header-controls">
                            <button className="btn btn-outline">Вход и регистрация</button>
                            <button className="btn btn-primary">Подать объявление</button>
                        </div>
                        <div className="header-burger">
                            <img src="/images/burger.svg" alt="burger" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}