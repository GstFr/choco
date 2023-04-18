
const products = [
    {
        id: '1',

        name: 'Negro con almendras',
        price: 1000,
        img: '/asset/ImgFacial/3.jpg',
        stock: 19,
        description: 'Cocolate negro, 80% cacao, semi amargo con almendras, 120gr'

    },
    {
        id: '2',

        name: 'Blanco con leche',
        price: 1000,
        img: '/asset/ImgFacial/11.jpg',
        stock: 15,
        description: 'Chocolate blanco con leche, 120gr'

    },
    {
        id: '3',

        name: 'Bombones',
        price: 1500,
        
        img: '/asset/ImgFacial/28.jpg',
        stock: 10,
        description: 'Mix de bombones artesanales, 200gr'

    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

