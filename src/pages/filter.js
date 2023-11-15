import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../component/navbar';
import { Dropdown } from 'primereact/dropdown';

export const Filter = () => {

    const [firstName,setFirstName] = useState("");
    const navigate = useNavigate();
    const [dropDownData,setDropDowndata] = useState([]);
    const [selectedValues, setSelectedValues] = useState({
      firstName: null,
      lastName: null,
      email: null,
      gender:null,
      cast:null
    });
    

   const handleFilterClick = (e) =>{
    e.preventDefault()
    const filterData = {
    }

//     if(selectedValues.firstName != null){
//         filterData.firstName  = selectedValues.firstName.firstName
//         // filterData.lastName = selectedCity.lastName
//     }
//     if(selectedValues.lastName != null){
//       filterData.lastName  = selectedValues.lastName.lastName 
//       // filterData.lastName = selectedCity.lastName
//   }
//   if(selectedValues.email != null){
//     filterData.email  = selectedValues.email.email 
//     // filterData.lastName = selectedCity.lastName
// }
Object.keys(selectedValues).forEach((field) => {
  const selectedValue = selectedValues[field];
  if (selectedValue !== null) {
    filterData[field] = selectedValue[field];
  }
});

    localStorage.setItem('filterData', JSON.stringify(filterData));
    navigate("/tables")
    }

    const fetchData = async() =>{
      const resp = await axios.get("https://surveybackend-cjev.onrender.com/api/user");
      console.log("resp",resp);
      if(resp.data.responseStatus === "success")
      {
       setDropDowndata(resp.data.responseData)
      }
    }

    const handleDropdownChange = (field, value) => {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        [field]: value,
      }));
    };
    useEffect(() => {
      fetchData()
    }, [])

    console.log("dropDownData",dropDownData);



  return (
   <>
   <NavBar />

   <div className='grid grid-cols-3 gap-3 mt-3 px-3'>
   <div className="card flex justify-content-center">
   <Dropdown value={selectedValues.firstName} onChange={(e) => handleDropdownChange('firstName', e.value)} options={dropDownData} optionLabel="firstName" 
     placeholder="Select a City" className="w-full md:w-14rem" />
  </div>
  <div className="card flex justify-content-center">
   <Dropdown value={selectedValues.lastName} onChange={(e) => handleDropdownChange('lastName', e.value)} options={dropDownData} optionLabel="lastName" 
     placeholder="Select a City" className="w-full md:w-14rem" />
  </div>

  <div className="card flex justify-content-center">
   <Dropdown value={selectedValues.email} onChange={(e) => handleDropdownChange('email', e.value)} options={dropDownData} optionLabel="email" 
     placeholder="Select a City" className="w-full md:w-14rem" />
  </div>

  <div className="card flex justify-content-center">
   <Dropdown value={selectedValues.gender} onChange={(e) => handleDropdownChange('gender', e.value)} options={dropDownData} optionLabel="gender" 
     placeholder="Select a City" className="w-full md:w-14rem" />
  </div>

  
  <div className="card flex justify-content-center">
   <Dropdown value={selectedValues.cast} onChange={(e) => handleDropdownChange('cast', e.value)} options={dropDownData} optionLabel="cast" 
     placeholder="Select a City" className="w-full md:w-14rem" />
  </div>

   </div>
   <div className='flex justify-end px-3 mt-5'>
   <button onClick={handleFilterClick}>Apply Filter</button>
   </div>
   </>
  )
}
