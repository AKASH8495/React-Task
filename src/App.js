import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    comments: false,
    candidate: false,
    offers: false,
    pushNotifications: '',




  })

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }


  function submitHandler (event) {
    event.preventDefault();
    console.log(formData);



  }




  return (
    <div className="flex flex-col items-center p-8 space-x-4">
      <form onSubmit={submitHandler} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label>
          First Name
        </label>
        <br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your First name"
          className="p-2 py-2 px-10 rounded border"
        />

        <br />

        <label>
          Last Name
        </label>
        <br></br>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your Last name"
          className="p-2 py-2 px-10 rounded border"
        />

        <br />

        <label>
          Email Address
        </label>
        <br></br>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="p-2 py-2 px-10 rounded border"
        />
        <br />

        <label>Country</label>
        <br />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="p-2 py-2 px-10 rounded border">


          <option value="">Select Country</option>
          <option value="INDIA">INDIA</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>


        <br />

        <label>
          Street Address
        </label>
        <br></br>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          placeholder="Enter your streetAddress"
          className="p-2 py-2 px-10 rounded border"
        />

        <br />

        <label>
          City
        </label>
        <br></br>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className="p-2 py-2 px-10 rounded border"
        />

        <br />

        <label className="text-gray-900 font-medium mb-1">
          State
        </label>
        <br></br>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter your state"
          className="p-2 py-2 px-10 rounded border"
        />


        <br />

        <label>
          ZIP/PICODE
        </label>
        <br></br>
        <input
          type="number"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Enter your postalCode"
          className="p-2 py-2 px-10 rounded border"
        />

        <fieldset className="mt-4">
          <legend className="text-base font-medium text-gray-900">By Email</legend>

          <div className="flex">

            <input
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={handleChange}
            />
            <div className="flex flex-col mt-3 ml-2 ">
              <label htmlFor="comments">Comments</label>
              <p className="text-sm text-gray-500">Get notified when someones a post comments on a posting </p>
            </div>
          </div>

          <div className="flex">

            <input
              name="candidate"
              type="checkbox"
              checked={formData.candidate}
              onChange={handleChange}
            />

            <div className='flex flex-col mt-3 ml-2 '>
              <label htmlFor="candidate" >Candidate</label>
              <p className="text-sm text-gray-500">Get notified when candidate applies a Job</p>
            </div>
          </div>


          <div className="flex">

            <input
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={handleChange}
            />
            <div className="flex flex-col mt-3 ml-2 ">
              <label htmlFor="offers">Offers</label>
              <p className="text-sm text-gray-500">Get notified when candidate accepts or reject offers</p>
            </div>
          </div>


        </fieldset>




        <fieldset className="mt-4">
          <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
          <p className="text-sm text-gray-500">These are dilevered via SMS to your mobile phone</p>

      
        <div className="mt-3">

        
        <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value='Everything'
            onChange={handleChange}


          />

         
         <label htmlFor="pushEverything" className="ml-2 mb-2">Everything</label>
      

        <br/>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value='same as email'
            onChange={handleChange}


          />

          <label htmlFor="pushEmail" className="ml-2">Same as eamil</label>

        <br/>
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value='No Push Notification'
            onChange={handleChange}


          />

          <label htmlFor="pushNothing" className="ml-2">No Push Notification</label>



          </div>
       



        </fieldset>


      <button className="bg-blue-500 font-bold text-white py-2 px-6 rounded mt-4">Save</button>

      </form>
    </div>
  );
}

export default App;
