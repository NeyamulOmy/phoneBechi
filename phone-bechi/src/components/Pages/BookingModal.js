import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider'
const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext)
    const { name, askPrice } = product;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name: productName,
            price: price,
            buyer: userName,
            email: userEmail,
            phone: phone,
            location: location
        }
        console.log(booking)

    }
    return (
        <>


            {/* Put this part before </body> tag */}
            < input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book Item!</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled className='input w-full input-bordered' name="productName" defaultValue={name} />
                        <input type="text" disabled className='input w-full input-bordered' name="price" defaultValue={`${askPrice} TK`} />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder='Meeting location' className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;