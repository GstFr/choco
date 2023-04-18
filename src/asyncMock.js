
const products = [
    {
        id: '1',

        name: 'Orquideas',
        price: 1000,
        img: '/assets/orquideas.jpg',
        stock: 19,
        category: 'exoticas',
        description: 'orquideas'

    },
    {
        id: '2',

        name: 'Gladiolos',
        price: 1000,
        img: '/assets/gladiolos.jpg',
        stock: 15,
        category: 'exoticas',
        description: 'Gladiolos'

    },
    {
        id: '3',

        name: 'Hortensias',
        price: 1500,
        img: '/assets/hortensias.jpg',
        stock: 10,
        category: 'jardin',
        description: 'Hortensias'

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
