import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider'
const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext)
    const { name } = product;
    return (
        <>


            {/* Put this part before </body> tag */}
            < input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book {name}!</h3>
                    <h4 className='text-md text-yellow-800'>Buyer: {user.displayName}</h4>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;