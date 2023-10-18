import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css'; // You can choose a different theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

function MultiForm() {
  const initialFormData = {
    firstName: '',
    fatherName: '',
    lastName: '',
    gender: '',
    cast: '',
    DOB: '',
    Death: '',
    address: '',
    familyno: '',
    homeno: '',
    voter: '',
    voterperson: '',
    profession: '',
    education: '',
    bloodgroup: '',
    blooddonate: '',
    adharnumber: '',
    pannumber: '',
    voteridNumber: '',
    passport: '',
    rashancard: '',
    daridryareshekhali: '',
    email: '',
    drivinglicenece: '',
    bankdetail: '',
    govschembenefits: '',
    incomtax: '',
    smoking: '',
    healthissue: '',
    apagatv: '',
    mariatalstatus: '',
    shareholder: '',
    sandharbh: '',
    vima: '',
    toilet: '',
    photo: '',
    chand: '',
    familydoctor: '',
    phoneno: '',
    mobile: '',
    home: '',
    hometype: '',
    socialwork: '',
    rajkiypad: '',
    sampanti: '',
    arthikvishleshan: '',
    rajkiyvishleshan: '',
    rajkiypaksh: '',
    panyachastrot: '',
    chaviconection: '',
    gharphala: '',
    panipatti: '',
    kaushalya: '',
    gyasconnection: '',
    lightconnection: '',
    language: '',
    mothername: '',
  };
  const [formDataList, setFormDataList] = useState([initialFormData]);

  function getInitialFormData() {
    return {
      firstName: '',
      fatherName: '',
      // ... add other form fields here
    };
  }



  function handleInputChange(index, name, value) {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[index][name] = value;
    setFormDataList(updatedFormDataList);
  }

  function addForm() {
    setFormDataList([...formDataList, getInitialFormData()]);
  }

  function removeForm(index) {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList.splice(index, 1);
    setFormDataList(updatedFormDataList);
  }

  function handleSubmit(e) {
    e.preventDefault()
    formDataList.forEach((formData) => {
      const {
        firstName,
        fatherName,
        lastName,
        gender,
        cast,
        DOB,
        Death,
        address,
        familyno,
        homeno,
        voter,
        voterperson,
        profession,
        education,
        bloodgroup,
        blooddonate,
        adharnumber,
        pannumber,
        voteridNumber,
        passport,
        rashancard,
        daridryareshekhali,
        email,
        drivinglicenece,
        bankdetail,
        govschembenefits,
        incomtax,
        smoking,
        healthissue,
        apagatv,
        mariatalstatus,
        shareholder,
        sandharbh,
        vima,
        toilet,
        photo,
        chand,
        familydoctor,
        phoneno,
        mobile,
        home,
        hometype,
        socialwork,
        rajkiypad,
        sampanti,
        arthikvishleshan,
        rajkiyvishleshan,
        rajkiypaksh,
        panyachastrot,
        chaviconection,
        gharphala,
        panipatti,
        kaushalya,
        gyasconnection,
        lightconnection,
        language,
        mothername,
      } = formData;

      const formDataObject = {
        firstName,
        fatherName,
        lastName,
        gender,
        cast,
        DOB,
        Death,
        address,
        familyno,
        homeno,
        voter,
        voterperson,
        profession,
        education,
        bloodgroup,
        blooddonate,
        adharnumber,
        pannumber,
        voteridNumber,
        passport,
        rashancard,
        daridryareshekhali,
        email,
        drivinglicenece,
        bankdetail,
        govschembenefits,
        incomtax,
        smoking,
        healthissue,
        apagatv,
        mariatalstatus,
        shareholder,
        sandharbh,
        vima,
        toilet,
        photo,
        chand,
        familydoctor,
        phoneno,
        mobile,
        home,
        hometype,
        socialwork,
        rajkiypad,
        sampanti,
        arthikvishleshan,
        rajkiyvishleshan,
        rajkiypaksh,
        panyachastrot,
        chaviconection,
        gharphala,
        panipatti,
        kaushalya,
        gyasconnection,
        lightconnection,
        language,
        mothername,
      };

      // Send each formDataObject individually to the API
      // axios.post('your-api-endpoint', formDataObject)
      //   .then((response) => {
      //     console.log('Data sent successfully:', response.data);
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //   });

      console.log("formDataObject", formDataObject);
    });

    // Add your API submission logic here
  }

  const gendorOption = [
    {name:'male'},
    {name:'female'},
    {name:'other'},
  ]

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formDataList.map((formData, index) => (
          <div key={index}>

            <div className="form-container">
              <div className="form-group">
                <label htmlFor={`firstName-${index}`}>First Name</label>
                <input
                  type="text"
                  id={`firstName-${index}`}
                  name={`firstName-${index}`}
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`fatherName-${index}`}>Father's Name</label>
                <input
                  type="text"
                  id={`fatherName-${index}`}
                  name={`fatherName-${index}`}
                  value={formData.fatherName}
                  onChange={(e) => handleInputChange(index, 'fatherName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="lastName">Last Name</label>

                <input type="text" id={`lastName-${index}`}
                  name={`lastName-${index}`}
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(index, 'lastName', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="gender">Gender</label>
                <div className=" ">
                <Dropdown value={formData.gender} onChange={(e) => handleInputChange(index, 'gender', e.target.value)} options={gendorOption} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem" />
                </div>
              </div>
              <div className="form-group">
                <label for="cast">Cast</label>
                <input type="text" id={`cast-${index}`}
                  name={`cast-${index}`}
                  value={formData.cast}
                  onChange={(e) => handleInputChange(index, 'cast', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="DOB">Date of Birth</label>
                <input type="date" id={`DOB-${index}`}
                  name={`DOB-${index}`}
                  value={formData.DOB}
                  onChange={(e) => handleInputChange(index, 'DOB', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="Death">Date of Death</label>
                <input type="date" id={`Death-${index}`}
                  name={`Death-${index}`}
                  value={formData.Death}
                  onChange={(e) => handleInputChange(index, 'Death', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="address">Address</label>
                <textarea id="address" name="address"></textarea>
              </div>
              <div className="form-group">
                <label for="familyno">Family Number</label>
                <input type="text" onChange={handleInputChange} id="familyno" name="familyno" />
              </div>
              <div className="form-group">
                <label for="homeno">Home Number</label>
                <input type="text" onChange={handleInputChange} id="homeno" name="homeno" />
              </div>
              <div className="form-group">
                <label for="voter">Voter</label>
                <input type="text" onChange={handleInputChange} id="voter" name="voter" />
              </div>
              <div className="form-group">
                <label for="voterperson">Voter Person</label>
                <input type="text" onChange={handleInputChange} id="voterperson" name="voterperson" />
              </div>
              <div className="form-group">
                <label for="profession">Profession</label>
                <input type="text" onChange={handleInputChange} id="profession" name="profession" />
              </div>
              <div className="form-group">
                <label for="education">Education</label>
                <input type="text" onChange={handleInputChange} id="education" name="education" />
              </div>
              <div className="form-group">
                <label for="bloodgroup">Blood Group</label>
                <input type="text" onChange={handleInputChange} id="bloodgroup" name="bloodgroup" />
              </div>
              <div className="form-group">
                <label for="blooddonate">Blood Donate</label>
                <input type="text" onChange={handleInputChange} id="blooddonate" name="blooddonate" />
              </div>
              <div className="form-group">
                <label for="adharnumber">Aadhar Number</label>
                <input type="text" onChange={handleInputChange} id="adharnumber" name="adharnumber" />
              </div>
              <div className="form-group">
                <label for="pannumber">PAN Number</label>
                <input type="text" onChange={handleInputChange} id="pannumber" name="pannumber" />
              </div>
              <div className="form-group">
                <label for="voteridNumber">Voter ID Number</label>
                <input type="text" onChange={handleInputChange} id="voteridNumber" name="voteridNumber" />
              </div>
              <div className="form-group">
                <label for="passport">Passport</label>
                <input type="text" onChange={handleInputChange} id="passport" name="passport" />
              </div>
              <div className="form-group">
                <label for="rashancard">Rashan Card</label>
                <input type="text" onChange={handleInputChange} id="rashancard" name="rashancard" />
              </div>
              <div className="form-group">
                <label for="daridryareshekhali">Daridrya Reshekhali</label>
                <input type="text" onChange={handleInputChange} id="daridryareshekhali" name="daridryareshekhali" />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input type="email onChange={handleInputChange}" id="email" name="email" />
              </div>
              <div className="form-group">
                <label for="drivinglicenece">Driving License</label>
                <input type="text" onChange={handleInputChange} id="drivinglicenece" name="drivinglicenece" />
              </div>
              <div className="form-group">
                <label for="bankdetail">Bank Details</label>
                <input type="text" onChange={handleInputChange} id="bankdetail" name="bankdetail" />
              </div>
              <div className="form-group">
                <label for="govschembenefits">Government Scheme Benefits</label>
                <input type="text" onChange={handleInputChange} id="govschembenefits" name="govschembenefits" />
              </div>
              <div className="form-group">
                <label for="incomtax">Income Tax</label>
                <input type="text" onChange={handleInputChange} id="incomtax" name="incomtax" />
              </div>
              <div className="form-group">
                <label for="smoking">Smoking</label>
                <input type="text" onChange={handleInputChange} id="smoking" name="smoking" />
              </div>
              <div className="form-group">
                <label for="smoking">Smoking</label>
                <input type="text" onChange={handleInputChange} id="smoking" name="smoking" />
              </div>

              <div class="form-group">
                <label for="healthissue">Health Issue:</label>
                <input type="text" name="healthissue" id="healthissue" />
              </div>

              <div class="form-group">
                <label for="apagatv">Apagatv:</label>
                <input type="text" name="apagatv" id="apagatv" />
              </div>

              <div class="form-group">
                <label for="mariatalstatus">Marital Status:</label>
                <input type="text" name="mariatalstatus" id="mariatalstatus" />
              </div>

              <div class="form-group">
                <label for="shareholder">Shareholder:</label>
                <input type="text" name="shareholder" id="shareholder" />
              </div>

              <div class="form-group">
                <label for="sandharbh">Sandharbh:</label>
                <input type="text" name="sandharbh" id="sandharbh" />
              </div>

              <div class="form-group">
                <label for="vima">Vima:</label>
                <input type="text" name="vima" id="vima" />
              </div>

              <div class="form-group">
                <label for="toilet">Toilet:</label>
                <input type="text" name="toilet" id="toilet" />
              </div>

              <div class="form-group">
                <label for="photo">Photo:</label>
                <input type="text" name="photo" id="photo" />
              </div>

              <div class="form-group">
                <label for="chand">Chand:</label>
                <input type="text" name="chand" id="chand" />
              </div>

              <div class="form-group">
                <label for="familydoctor">Family Doctor:</label>
                <input type="text" name="familydoctor" id="familydoctor" />
              </div>

              <div class="form-group">
                <label for="phoneno">Phone Number:</label>
                <input type="text" name="phoneno" id="phoneno" />
              </div>

              <div class="form-group">
                <label for="mobile">Mobile:</label>
                <input type="text" name="mobile" id="mobile" />
              </div>

              <div class="form-group">
                <label for="home">Home:</label>
                <input type="text" name="home" id="home" />
              </div>

              <div class="form-group">
                <label for="hometype">Home Type:</label>
                <input type="text" name="hometype" id="hometype" />
              </div>

              <div class="form-group">
                <label for="socialwork">Social Work:</label>
                <input type="text" name="socialwork" id="socialwork" />
              </div>

              <div class="form-group">
                <label for="rajkiypad">Rajkiyapad:</label>
                <input type="text" name="rajkiypad" id="rajkiypad" />
              </div>

              <div class="form-group">
                <label for="sampanti">Sampanti:</label>
                <input type="text" name="sampanti" id="sampanti" />
              </div>

              <div class="form-group">
                <label for="arthikvishleshan">Arthik Vishleshan:</label>
                <input type="text" name="arthikvishleshan" id="arthikvishleshan" />
              </div>

              <div class="form-group">
                <label for="rajkiyvishleshan">Rajkiy Vishleshan:</label>
                <input type="text" name="rajkiyvishleshan" id="rajkiyvishleshan" />
              </div>

              <div class="form-group">
                <label for="rajkiypaksh">Rajkiy Paksh:</label>
                <input type="text" name="rajkiypaksh" id="rajkiypaksh" />
              </div>

              <div class="form-group">
                <label for="panyachastrot">Panya Chastrot:</label>
                <input type="text" name="panyachastrot" id="panyachastrot" />
              </div>

              <div class="form-group">
                <label for="chaviconection">Chavi Connection:</label>
                <input type="text" name="chaviconection" id="chaviconection" />
              </div>

              <div class="form-group">
                <label for="gharphala">Ghar Phala:</label>
                <input type="text" name="gharphala" id="gharphala" />
              </div>

              <div class="form-group">
                <label for="panipatti">Panipatti:</label>
                <input type="text" name="panipatti" id="panipatti" />
              </div>

              <div class="form-group">
                <label for="kaushalya">Kaushalya:</label>
                <input type="text" name="kaushalya" id="kaushalya" />
              </div>

              <div class="form-group">
                <label for="gyasconnection">Gyas Connection:</label>
                <input type="text" name="gyasconnection" id="gyasconnection" />
              </div>

              <div class="form-group">
                <label for="lightconnection">Light Connection:</label>
                <input type="text" name="lightconnection" id="lightconnection" />
              </div>

              <div class="form-group">
                <label for="language">Language:</label>
                <input type="text" name="language" id="language" />
              </div>

              <div class="form-group">
                <label for="mothername">Mother's Name:</label>
                <input type="text" name="mothername" id="mothername" />
              </div>


            </div>
            <div className="form-container">

            </div>

            {/* ... add other form fields here */}
            <button type="button" onClick={() => removeForm(index)}>
              Remove
            </button>
          </div>
        ))}


        <div className="Addmorebtncontainer">
          <button className="Addmorebtn" onClick={addForm}>
            Add More
          </button>
        </div>
        <div className="submitbtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default MultiForm;
