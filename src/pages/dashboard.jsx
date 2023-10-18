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
    <div className='Addmorebtncontainer'>
    <button className='Addmorebtn' >Add More</button>
    </div>

    <div className="form-container">
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
    <div className='submitbtn'>
    <button>Submit</button>
    </div>
    </form>
    </>
  );
}

export default Dashboard;
