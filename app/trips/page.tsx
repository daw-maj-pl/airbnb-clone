import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import EmptyState from '../components/EmptyState';
import TripsClient from './TripsClient';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="UnAuthorized"
        subtitle="Please login to view your trips."
      />
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id
  });

  if (reservations.length === 0) {
    return (
      <EmptyState title="No Trips" subtitle="You have not booked any trips." />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
