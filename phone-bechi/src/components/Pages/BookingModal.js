import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider'
const BookingModal = ({ product, setCurrentProduct }) => {
    const { user } = useContext(AuthContext)
    const { name, askPrice, image } = product;
    console.log(product)
    console.log(name)
    console.log(askPrice)
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
            productName: productName,
            price: price,
            buyer: userName,
            email: userEmail,
            phone: phone,
            location: location,
            image: image
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking confirmed');
                    form.reset();

                }
                else {
                    toast.error(data.message);
                }
            })

    }
    return (
        <>


            {/* Put this part before </body> tag */}
            < input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" onClick={() => setCurrentProduct([])} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book Item!</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled className='input w-full input-bordered' name="productName" defaultValue={name} />
                        <input type="text" disabled className='input w-full input-bordered' name="price" defaultValue={askPrice} />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" required placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" required type="text" placeholder='Meeting location' className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;