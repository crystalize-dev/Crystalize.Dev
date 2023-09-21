import pluscomfort from "../img/projects/pluscomfort.png"
import bestcoin from "../img/projects/bestcoin.png"
import incar from "../img/projects/incar.png"


export const projects = [
    {
        name: "InCar",
        description: {
            en: "InCar is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price",
            ru: "InCar — это онлайн-платформа, которая позволяет пользователям арендовать автомобили для личного или делового использования. Сайт предоставляет простой в использовании интерфейс для поиска, сравнения и бронирования автомобилей из широкого спектра автомобилей, различающихся по марке, модели, размеру и цене"
        },
        src: incar,
        git: "https://github.com/crystalize-dev/InCar-carsharing",
        link: "https://crystalize-incar.netlify.app/",
        tags: ["React", "JS", "Router-DOM", 'Localization']
    },
    {
        name: "PlusComfort",
        description: {
            en: "This is an online furniture store website built with React and CSS. This website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience that puts the focus on the products",
            ru: "Это веб-сайт интернет-магазина мебели, созданный с помощью React и CSS. Этот веб-сайт имеет современный и интуитивно понятный дизайн, простую в использовании навигацию и простой процесс совершения покупок"
        },
        src: pluscomfort,
        git: "https://github.com/crystalize-dev/PlusComfort-FurnitureStore",
        link: "https://crystalize-pluscomfort.netlify.app/",
        tags: ["React", "JS", 'Router-DOM', "React-Context", "Localization", "LocalStorage"]
    },
    {
        name: "BestCoin",
        description: {
            en: "BestCoin is a website that allows users to search for information about various cryptocurrencies in real-time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other key metrics of cryptocurrencies",
            ru: "BestCoin — это веб-сайт, который позволяет пользователям искать информацию о различных криптовалютах в режиме реального времени. Веб-сайт предназначен для предоставления пользователям точной и актуальной информации о цене, рыночной капитализации, объеме торгов и других ключевых показателях криптовалют"
        },
        src: bestcoin,
        git: "https://github.com/crystalize-dev/BestCoin-CryptoSearch",
        link: "https://crystalize-bestcoin.netlify.app/",
        tags: ["React", "JS", "API", "Localization", "NodeJS"]
    },
]