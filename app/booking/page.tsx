import Booking from '../booking';
import BookingForm from '../booking-form';

export default function BookingPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Booking />
      <BookingForm />
    </div>
  );
}
