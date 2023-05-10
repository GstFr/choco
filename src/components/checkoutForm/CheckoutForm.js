import { useState } from 'react'
import './CheckoutForm.css'



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    return (
        <div className='ContainerFormCheckout'>
            <form onSubmit={handleConfirm} className='FormCheckout'>
                <label className='Label'>
                    Nombre
                    <input className='Input'
                        type='text' placeholder='Jose Maria'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='Label'>
                    Telefono
                    <input className='Input'
                        type='text' placeholder='3518124379'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className='Label'>
                    Email
                    <input className='InputEmail'
                        type="email" name="email" required placeholder='josemaria@xxx'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='btn btn-danger buttonCrearOrden'>Ordenar</button>
                </div>
            </form>


        </div>

    )

}

export default CheckoutForm