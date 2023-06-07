// booking ?
export default function ReservationCard(props) {
    // about  image des chefs
    console.log(props);
      return (
        <>
          <section className='reservation'>
          <div className="booKHome">
          <h2>Your Reservation for the "Lemon Restaurant" :</h2>
            <p><b>Date :</b> {props.resdate} 
            <span><b> At :</b> {props.restime} H,</span> </p>
            <p>{props.guests} <b>Guests, </b> </p>
            <p><b>For </b>  {props.occasions} <b> Occasion.</b>
            </p>
        </div>

          </section>
          </>
      );
  };
