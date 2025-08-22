// // import React from 'react'
// // import { useRideStore } from '../../store/useRideStore';

// // const SearchSuggestion = ({suggestionOpen,onSelect}) => {
// // //    const { predictions}=useRideStore();


// // const predictions=[
// //     {
// //       description: 'Korutla, Telangana, India',
// //       matched_substrings: [Array],
// //       place_id: 'ChIJNRvvohcLzTsRAWzA3Knr0lM',
// //       reference: 'ChIJNRvvohcLzTsRAWzA3Knr0lM',
// //       structured_formatting: [Object],
// //       terms: [Array],
// //       types: [Array]
// //     },
// //     {
// //       description: 'Korutla Bus stand, Korutla Main Rd, Korutla, Jagtial, Telangana, India',
// //       matched_substrings: [Array],
// //       place_id: 'ChIJqw19iDwLzTsRzfHe-Biu62E',
// //       reference: 'ChIJqw19iDwLzTsRzfHe-Biu62E',
// //       structured_formatting: [Object],
// //       terms: [Array],
// //       types: [Array]
// //     },
// //     {
// //       description: 'Korutlapet, Telangana, India',
// //       matched_substrings: [Array],
// //       place_id: 'ChIJMVGAgW9WzDsRjDa51J8PC2M',
// //       reference: 'ChIJMVGAgW9WzDsRjDa51J8PC2M',
// //       structured_formatting: [Object],
// //       terms: [Array],
// //       types: [Array]
// //     },
// //     {
// //       description: 'Korutlagudem, Telangana, India',
// //       matched_substrings: [Array],
// //       place_id: 'ChIJ86kkRKX-NDoRgT06Wz3ABnQ',
// //       reference: 'ChIJ86kkRKX-NDoRgT06Wz3ABnQ',
// //       structured_formatting: [Object],
// //       terms: [Array],
// //       types: [Array]
// //     },
// //     {
// //       description: 'Korutla Railway Station Road, Korutla, Telangana, India',
// //       matched_substrings: [Array],
// //       place_id: 'EjdLb3J1dGxhIFJhaWx3YXkgU3RhdGlvbiBSb2FkLCBLb3J1dGxhLCBUZWxhbmdhbmEsIEluZGlhIi4qLAoUChIJZ_Rnxi4LzTsRjuSbjlxnlWcSFAoSCTUb76IXC807EQFswNyp69JT',
// //       reference: 'EjdLb3J1dGxhIFJhaWx3YXkgU3RhdGlvbiBSb2FkLCBLb3J1dGxhLCBUZWxhbmdhbmEsIEluZGlhIi4qLAoUChIJZ_Rnxi4LzTsRjuSbjlxnlWcSFAoSCTUb76IXC807EQFswNyp69JT',
// //       structured_formatting: [Object],
// //       terms: [Array],
// //       types: [Array]
// //     }
// //   ];
// //     console.log(suggestionOpen)
// //     if(!suggestionOpen) return null;
// //   return (
// //     <div className="absolute bg-white left-7 top-11 border border-gray-200 p-2 rounded-md">
// //       {predictions.map((prediction) => (
// //         <div
// //           key={prediction.place_id}
// //           className="mb-1 w-[80%] border-b border-gray-300 p-2 cursor-pointer hover:bg-gray-100"
// //           onClick={() => onSelect(prediction)}
// //         >
// //           <h2 className="w-full">{prediction.description}</h2>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default SearchSuggestion

// import React from 'react';

// const SearchSuggestion = ({ suggestionOpen, onSelect }) => {
//   const predictions = [
//     { description: 'Korutla, Telangana, India', place_id: '1' },
//     { description: 'Korutla Bus stand, Telangana, India', place_id: '2' },
//     { description: 'Korutlapet, Telangana, India', place_id: '3' },
//     { description: 'Korutlagudem, Telangana, India', place_id: '4' },
//     { description: 'Korutla Railway Station Road, Telangana, India', place_id: '5' },
//   ];

//   if (!suggestionOpen) return null;

//   return (
//     <div className="absolute bg-white left-7 top-11 border border-gray-200 p-2 rounded-md z-10 w-[90%]">
//       {predictions.map((prediction) => (
//         <div
//           key={prediction.place_id}
//           className="mb-1 border-b border-gray-300 p-2 cursor-pointer hover:bg-gray-100"
//           onClick={() => onSelect(suggestionOpen,prediction)}
//         >
//           <h2 className="text-sm">{prediction.description}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchSuggestion;
import React from 'react';

const SearchSuggestion = ({ suggestionOpen, onSelect }) => {
  const predictions = [
    { description: 'Korutla, Telangana, India', place_id: '1' },
    { description: 'Korutla Bus stand, Telangana, India', place_id: '2' },
    { description: 'Korutlapet, Telangana, India', place_id: '3' },
    { description: 'Korutlagudem, Telangana, India', place_id: '4' },
    { description: 'Korutla Railway Station Road, Telangana, India', place_id: '5' },
  ];

  if (!suggestionOpen) return null;

  return (
    <div className="absolute bg-white left-7 top-11 border border-gray-200 p-2 rounded-md z-10 w-[90%]">
      {predictions.map((prediction) => (
        <div
          key={prediction.place_id}
          className="mb-1 border-b border-gray-300 p-2 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelect(prediction)}   
        >
          <h2 className="text-sm">{prediction.description}</h2>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestion;
