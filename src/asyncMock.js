
const products = [
    {
        id: '1',

        name: 'Negro con almendras',
        price: 1000,
        img: '/asset/ImgFacial/3.jpg',
        stock: 19,
        category: 'tableta',
        description: 'Cocolate negro, 80% cacao, semi amargo con almendras, 120gr'

    },
    {
        id: '2',

        name: 'Blanco con leche',
        price: 1000,
        img: '/asset/ImgFacial/11.jpg',
        stock: 15,
        category: 'tableta',
        description: 'Chocolate blanco con leche, 120gr'

    },
    {
        id: '3',

        name: 'Bombones',
        price: 1500,
        img: '/asset/ImgFacial/28.jpg',
        stock: 10,
        category: 'bombones',
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
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
