import React, { useState } from 'react';

    const BookingForm = (props) => {
        // reducer

        // availableTimes
        const [availableTimes, setAvailableTimes] = useState({ 
            resdate:'',
            restime:'',
            guests:'',
            occasions:'',
          }); 

          const getIsFormValid = () => {
            return(
                availableTimes.restime
            && availableTimes.guests      
            && availableTimes.occasions !== 'occasions'
            )
          };
          const clearForm = () => {
            setAvailableTimes(' ')
          };
            const handleSubmit = (e) => { 
            e.preventDefault();
            props.onAdd(availableTimes);
            
            console.log('form submit')
            alert( 'Your Booking is created!');
            clearForm();
        }

        // The API has two functions that you can use in your code: 
        // fetchAPI(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date        
        // submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
        // const [btcData, setBtcData] = useState({}); 
        // useEffect(() => { 
        //   fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
        //     .then((response) => response.json()) 
        //     .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
        //     .catch((error) => console.log(error)); 
        // }, []);
      
        // useEffect(() => { 
        //   fetchData(); 
        // }, []); 

   

    return(
    <>
    <section className="spaceSection">    
        <form onSubmit={handleSubmit}  id="formBook" className="backGround">
            <fieldset>           
            <div className="Field">
            <label htmlFor="resdate">Choose a date :</label>
            <input
            className="fontSize"
            id="resdate"
            name ="resdate"
            placeholder="Date de reservation"
            onChange={ e => setAvailableTimes({
                ...availableTimes,
                resdate: e.target.value}) }            
            type="date"  
            />
            </div>

            <div className="Field">
            <label htmlFor="restime">Choose a time:</label>
            <select 
            className="fontSize"
            id="restime"
            value={availableTimes.restime}
            onChange={ e => setAvailableTimes({
                ...availableTimes,
                restime: e.target.value}) }
            >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            </div>

            <div className="Field">
            <label htmlFor="guests">Number of guests : </label>
            <input
            className="fontSize"
            id="guests"
            name ="guests"
            placeholder="1" 
            min="1" 
            max="10" 
            onChange={ e => setAvailableTimes({
                ...availableTimes,
                guests: e.target.value}) }
            type="number"
            />
            </div>            

            <div className="Field">
            <label htmlFor="occasions">Occasions <sup>*</sup></label>
            <select
            className="fontSize"
             id="occasions"
             name ="occasions"
            onChange={ e => setAvailableTimes({
                ...availableTimes,
                occasions: e.target.value}) }
                >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>            
            </div>

            <button disabled={!getIsFormValid()} type="submit" className="bookButton">Make Your reservation</button>
            </fieldset>
            
        </form>

        <div className="book">
            <h2>Your booking : </h2>
            <p><b>Date :</b> {availableTimes.resdate} 
            <span><b> At :</b> {availableTimes.restime} H,</span> </p>
            <p>{availableTimes.guests} <b>Guests, </b> </p>
            <p><b>For </b>  {availableTimes.occasions} <b> Occasion.</b></p>
        </div>
        
       
        </section> 
        </>
        
    );
};

export default BookingForm;

