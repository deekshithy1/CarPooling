// import React, { useEffect, useState } from 'react';
// import { Calendar, CircleDotDashed, User } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// import { useRideStore } from '../../store/useRideStore';
// import SearchSuggestion from './SearchSuggestion';
// const SearchRides = ({onSearch}) => {
//     const navigate=useNavigate();
//     const {getAvailableRides,fetchLocation}=useRideStore();
//     const [suggestionOpen,setSuggestionOpen]=useState({from:false,to:false,fromId:"",toId:""});
//   const [formData, setFormData] = useState({
//     from: '',
//     to: '',
//     DateOfJourney: '',

//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Search Ride:', formData);
//     onSearch(formData);
//     // navigate("/Rides")
     

   
//   };
//   const handleSelect = (field, prediction) => {
//     setFormData((prev) => ({ ...prev, [field]: prediction.description }));
//     setSuggestionOpen((prev) => ({ ...prev, [field]: false }));
//   };
//   useEffect(()=>{
//  fetchLocation(formData.from);
//   },[formData.from]);

//   console.log(suggestionOpen)

//   const inputClasses = 'border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400';

//   return (
//     <div className="p-6 bg-gray-100  flex justify-center items-start">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white w-full max-w-lg p-6 rounded-xl shadow-md flex flex-col gap-4"
//       >
//         <h2 className="text-2xl font-semibold mb-4">Search for a Ride</h2>

//         {/* From */}
//         <div className="relative flex flex-col  gap-2" onClick={()=>setSuggestionOpen({from:true})}>
//           <div className='flex items-center gap-2'>
//           <CircleDotDashed className="w-5 text-gray-600" />
//           <input
//             type="text"
//             name="to"
//             placeholder=" Leaving From"
//             value={formData.from}
//             onChange={handleChange}
//             className={inputClasses}
//             required
//           />
//           </div>
//           {   
//           SearchSuggestion.from &&(
//           <SearchSuggestion suggestionOpen={suggestionOpen.from} onSelect={(prediction)=>{handleSelect('from',prediction)}} />)
//           }
//         </div>
//         {/* To */}
//         <div className="relative flex flex-col  gap-2" onClick={()=>setSuggestionOpen({to:true})}>
//           <div className='flex items-center gap-2'>
//           <CircleDotDashed className="w-5 text-gray-600" />
//           <input
//             type="text"
//             name="to"
//             placeholder="Going To"
//             value={formData.to}
//             onChange={handleChange}
//             className={inputClasses}
//             required
//           />
//           </div>
//           {   
//           SearchSuggestion.to &&(
//           <SearchSuggestion suggestionOpen={suggestionOpen.to} onSelect={(prediction)=>{handleSelect('to',prediction)}} />)
// }
//         </div>


//         {/* Date */}
//         <div className="flex items-center gap-2">
//           <Calendar className="w-5 text-gray-600" />
//           <input
//             type="date"
//             name="DateOfJourney"
//             value={formData.DateOfJourney}
//             onChange={handleChange}
//             className={inputClasses}
//             required
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-[#0F9D8E] text-white font-medium py-2 rounded-md hover:bg-green-500 transition-colors mt-2"
//         >
//           Search Ride
//         </button>
//       </form>
      
//     </div>
//   );
// };

// export default SearchRides;

import React, { useEffect, useState } from 'react';
import { Calendar, CircleDotDashed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRideStore } from '../../store/useRideStore';
import SearchSuggestion from './SearchSuggestion';

const SearchRides = ({ onSearch }) => {
  const navigate = useNavigate();
  const { getAvailableRides, fetchLocation } = useRideStore();
  
  const [suggestionOpen, setSuggestionOpen] = useState({ from: false, to: false ,placeIdFrom:"",placeIdTo:""});
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    DateOfJourney: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // open suggestions only if user types more than 2 chars
    if (name === "from" || name === "to") {
      setSuggestionOpen((prev) => ({ ...prev, [name]: value.length > 2 }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Search Ride:', formData);
    onSearch(formData);
    // navigate("/Rides");
  };

  const handleSelect = (field, prediction) => {
    setFormData((prev) => ({ ...prev, [field]: prediction.description }));
  
    // 👇 close only the clicked field dropdown
    setSuggestionOpen((prev) => ({ ...prev, [field]: false }));
    if(field==="from"){
      setSuggestionOpen((prev) => ({ ...prev, placeIdFrom: prediction.place_id }));
    }
    if(field==="to"){
      setSuggestionOpen((prev) => ({ ...prev, placeIdTo: prediction.place_id }));
    }
  };
  
  console.log(suggestionOpen)

  useEffect(() => {
    if (formData.from.length > 2) {
      fetchLocation(formData.from);
    }
  }, [formData.from]);

  const inputClasses =
    'border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400';

  return (
    <div className="p-6 bg-gray-100 flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-xl shadow-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Search for a Ride</h2>
{/* From */}
<div className="relative flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <CircleDotDashed className="w-5 text-gray-600" />
    <input
      type="text"
      name="from"
      placeholder="Leaving From"
      value={formData.from}
      onChange={handleChange}
      onFocus={() => setSuggestionOpen((prev) => ({ ...prev, from: true }))}
      className={inputClasses}
      required
    />
  </div>
  {suggestionOpen.from && (
    <SearchSuggestion
      suggestionOpen={suggestionOpen.from}
      onSelect={(prediction) => handleSelect('from', prediction)}
    />
  )}
</div>

{/* To */}
<div className="relative flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <CircleDotDashed className="w-5 text-gray-600" />
    <input
      type="text"
      name="to"
      placeholder="Going To"
      value={formData.to}
      onChange={handleChange}
      onFocus={() => setSuggestionOpen((prev) => ({ ...prev, to: true }))}
      className={inputClasses}
      required
    />
  </div>
  {suggestionOpen.to && (
    <SearchSuggestion
      suggestionOpen={suggestionOpen.to}
      onSelect={(prediction) => handleSelect('to', prediction)}
    />
  )}
</div>


        {/* Date */}
        <div className="flex items-center gap-2">
          <Calendar className="w-5 text-gray-600" />
          <input
            type="date"
            name="DateOfJourney"
            value={formData.DateOfJourney}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#0F9D8E] text-white font-medium py-2 rounded-md hover:bg-green-500 transition-colors mt-2"
        >
          Search Ride
        </button>
      </form>
    </div>
  );
};

export default SearchRides;
