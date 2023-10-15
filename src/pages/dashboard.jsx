import React, { useState } from 'react';

function Dashboard() {
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


  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the payload data
    const payloadData = { ...formData };

    // Call your API function and pass the payloadData
    console.log('Payload Data:', payloadData);
  };

  return (
    <>
    <form onSubmit={handleSubmit} >
    <div>


    <div className="form-group ">
      <label for="firstName " >First Name</label>
      <input type="text" onChange={handleInputChange} id="firstName" name="firstName" />
    </div>
    <div className="form-group">
      <label for="fatherName">Father's Name</label>
      <input type="text" onChange={handleInputChange} id="fatherName" name="fatherName" />
    </div>
    <div className="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" onChange={handleInputChange} id="lastName" name="lastName" />
    </div>
    <div className="form-group">
      <label for="gender">Gender</label>
      <select id="gender" name="gender">
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="form-group">
      <label for="cast">Cast</label>
      <input type="text" onChange={handleInputChange} id="cast" name="cast" />
    </div>
    <div className="form-group">
      <label for="DOB">Date of Birth</label>
      <input type="date" onChange={handleInputChange} id="DOB" name="DOB" />
    </div>
    <div className="form-group">
      <label for="Death">Date of Death</label>
      <input type="date" onChange={handleInputChange} id="Death" name="Death" />
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
    </div>
    <button>Submit</button>
    </form>
    </>
  );
}

export default Dashboard;
