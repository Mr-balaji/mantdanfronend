import React, { useState,useRef, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css'; // You can choose a different theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Toast } from 'primereact/toast';
import { TabPanel, TabView } from 'primereact/tabview';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export  function AddForm() {
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEditMode,setIsEditMode] = useState(false);
  
  const { id } = useParams();

  const handleChange = (e) => {
    // e.index represents the index of the selected tab
    setActiveIndex(e.index);
    // Your custom logic here
    console.log(`Tab changed to index ${e.index}`);
  };

  function getInitialFormData() {
    return {
      firstName: '',
      fatherName: '',
      // ... add other form fields here
    };
  }

  const toast = useRef(null);



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

 const  handleSubmit = async(e) => {
    e.preventDefault()
    // const formDataObject = {};
   formDataList.forEach(async (formData) => {
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

      const  formDataObject = {
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

      var resp ;
     if(isEditMode) {
        resp = await  axios.put(`https://surveybackend-cjev.onrender.com/api/user/${id}`,formDataObject)

     }else{
       resp = await  axios.post("https://surveybackend-cjev.onrender.com/api/user/create",formDataObject)

     }
      console.log("formMainData",resp);
      if(resp.data.responseStatus === "success"){
        toast.current.show({severity:'success', summary: 'Success', detail:resp.data.responseMsg, life: 3000,sticky: true });
      }else{
        toast.current.show({severity:'error', summary: 'Error', detail:resp.data.responseMsg
        , life: 3000,sticky: true});
      }
 
    });

    
    
    // Add your API submission logic here
  }

  const gendorOption = [
    {name:'male'},
    {name:'female'},
    {name:'other'},
  ]

  const handleClisk = () =>{
    const nextIndex = (activeIndex + 1) % 6
    console.log("nextIndex",activeIndex);
 
    setActiveIndex(nextIndex);
  }

  const handlePrev = () =>{
    const nextIndex = (activeIndex - 1) % 6;
    console.log("nextIndex",nextIndex);
    setActiveIndex(nextIndex);
  }
  console.log("activeIndex",activeIndex);


  const dataFeatchById  = async() =>{
    if (id) {
      const resp  = await axios.get(`https://surveybackend-cjev.onrender.com/api/user/${id}`)
      setFormDataList([resp.data.responseData])
      setIsEditMode(true);
    } else {
      // Clear form data if not in edit mode
      // setFormData({ /* initial form data */ });
      setIsEditMode(false);
    }
  }

  useEffect(() => {
    dataFeatchById();
  }, [id]);
   
  return (
    <>

   
        {formDataList.map((formData, index) => (
          <div key={index} className='form-container-div'>
            <Link to={"/tables"} className='bg-[green] py-3 text-[#fff] px-3 ml-5 rounded-md mt-3' >Back</Link>
         <Toast ref={toast} position='top-center' />
            <div className="px-3 py-5">

            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <TabPanel header="Form 1" className=''>
      <div className='grid grid-cols-3 gap-3'>
    <div className="form-group ">
                <label htmlFor={`firstName-${index}`}>नाव-</label>
                <InputText
                  id={`firstName-${index}`}
                  name={`firstName-${index}`}
                  className='form-input'
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`fatherName-${index}`}>वडिलांचे  नाव </label>
                <InputText
                  type="text"
                  id={`fatherName-${index}`}
                  name={`fatherName-${index}`}
                  value={formData.fatherName}
                  onChange={(e) => handleInputChange(index, 'fatherName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="lastName">आडनाव</label>

                <InputText type="text" id={`lastName-${index}`}
                  name={`lastName-${index}`}
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(index, 'lastName', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="gender">लिंग</label>
                <div className=" ">
                <Dropdown value={formData.gender} onChange={(e) => handleInputChange(index, 'gender', e.target.value)} options={gendorOption} optionLabel="name"
                placeholder="Select Gender" className="w-full md:w-14rem" />
                </div>
              </div>
              <div className="form-group">
                <label for="cast">धर्म</label>
                <InputText type="text" id={`cast-${index}`}
                  name={`cast-${index}`}
                  value={formData.cast}
                  onChange={(e) => handleInputChange(index, 'cast', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="DOB">जन्मदिनांक</label>
                <InputText type="date" id={`DOB-${index}`}
                  name={`DOB-${index}`}
                  value={formData.DOB}
                  onChange={(e) => handleInputChange(index, 'DOB', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="Death">मृत्यू</label>
                <InputText type="date" id={`Death-${index}`}
                  name={`Death-${index}`}
                  value={formData.Death}
                  onChange={(e) => handleInputChange(index, 'Death', e.target.value)} />
              </div>
              <div className="form-group">
                <label for="address">पत्ता</label>
                <InputTextarea   value={formData.address}
                  onChange={(e) => handleInputChange(index, 'address', e.target.value)} cols={50} rows={2}  id="address" name="address" / >
              </div>
              <div className="form-group">
                <label for="familyno">कुटुंब नं.</label>
                <input type="text" value={formData.familyno}
                  onChange={(e) => handleInputChange(index, 'familyno', e.target.value)} id="familyno" name="familyno" />
              </div>
              </div>
    </TabPanel>
    <TabPanel header="Form 2">
    <div className='grid grid-cols-3 gap-3'>

    <div className="form-group">
                <label for="homeno">घर नं.</label>
                <input type="text"   value={formData.homeno}
                  onChange={(e) => handleInputChange(index, 'homeno', e.target.value)} id="homeno" name="homeno" />
              </div>
              <div className="form-group">
                <label for="voter">मतदान</label>
                <input type="text" value={formData.voter}
                  onChange={(e) => handleInputChange(index, 'voter', e.target.value)} id="voter" name="voter" />
              </div>
              <div className="form-group">
                <label for="voterperson">मतदार</label>
                <input type="text" value={formData.voterperson}
                  onChange={(e) => handleInputChange(index, 'voterperson', e.target.value)} id="voterperson" name="voterperson" />
              </div>
              <div className="form-group">
                <label for="profession">व्यवसाय</label>
                <input type="text" value={formData.profession}
                  onChange={(e) => handleInputChange(index, 'profession', e.target.value)} id="profession" name="profession" />
              </div>
              <div className="form-group">
                <label for="education">शिक्षण</label>
                <input type="text" value={formData.education}
                  onChange={(e) => handleInputChange(index, 'education', e.target.value)} id="education" name="education" />
              </div>
              <div className="form-group">
                <label for="bloodgroup">रक्तगट</label>
                <input type="text" value={formData.bloodgroup}
                  onChange={(e) => handleInputChange(index, 'bloodgroup', e.target.value)} id="bloodgroup" name="bloodgroup" />
              </div>
              <div className="form-group">
                <label for="blooddonate">रक्तदान</label>
                <input type="text" value={formData.blooddonate}
                  onChange={(e) => handleInputChange(index, 'blooddonate', e.target.value)} id="blooddonate" name="blooddonate" />
              </div>
              <div className="form-group">
                <label for="adharnumber">आधार कार्ड</label>
                <input type="text" value={formData.adharnumber}
                  onChange={(e) => handleInputChange(index, 'adharnumber', e.target.value)} id="adharnumber" name="adharnumber" />
              </div>
              <div className="form-group">  
                <label for="pannumber">पॅन कार्ड</label>
                <input type="text" value={formData.pannumber}
                  onChange={(e) => handleInputChange(index, 'pannumber', e.target.value)} id="pannumber" name="pannumber" />
              </div>
              </div>
    </TabPanel>
    <TabPanel header="Form 3">
    <div className='grid grid-cols-3 gap-3'>

    <div className="form-group">

                <label for="voteridNumber">वोटर आयडी</label>
                <input type="text" value={formData.voteridNumber}
                  onChange={(e) => handleInputChange(index, 'voteridNumber', e.target.value)} id="voteridNumber" name="voteridNumber" />
              </div>
              <div className="form-group">
                <label for="passport">पासपोर्ट</label>
                <input type="text" value={formData.passport}
                  onChange={(e) => handleInputChange(index, 'passport', e.target.value)}  id="passport" name="passport" />
              </div>
              <div className="form-group">
                <label for="rashancard">रेशन कार्ड</label>
                <input type="text" value={formData.rashancard}
                  onChange={(e) => handleInputChange(index, 'rashancard', e.target.value)} id="rashancard" name="rashancard" />
              </div>
              <div className="form-group">
                <label for="daridryareshekhali">दारिद्र्यरेषेखालील</label>
                <input type="text" value={formData.daridryareshekhali}
                  onChange={(e) => handleInputChange(index, 'daridryareshekhali', e.target.value)}  id="daridryareshekhali" name="daridryareshekhali" />
              </div>
              <div className="form-group">
                <label for="email">ईमेल आयडी</label>
                <input type="email " value={formData.email}
                  onChange={(e) => handleInputChange(index, 'email', e.target.value)} id="email" name="email" />
              </div>
              <div className="form-group">
                <label for="drivinglicenece">ड्रायविंग लायसन्स</label>
                <input type="text"  value={formData.drivinglicenece}
                  onChange={(e) => handleInputChange(index, 'drivinglicenece', e.target.value)} id="drivinglicenece" name="drivinglicenece" />
              </div>
              <div className="form-group">
                <label for="bankdetail">बँक खाते</label>
                <input type="text" value={formData.bankdetail}
                  onChange={(e) => handleInputChange(index, 'bankdetail', e.target.value)}  id="bankdetail" name="bankdetail" />
              </div>
              <div className="form-group">
                <label for="govschembenefits">सरकारी योजना लाभ</label>
                <input type="text" value={formData.govschembenefits}
                  onChange={(e) => handleInputChange(index, 'govschembenefits', e.target.value)} id="govschembenefits" name="govschembenefits" />
              </div>
              <div className="form-group">
                <label for="incomtax">इनकम टॅक्स</label>
                <input type="text" value={formData.incomtax}
                  onChange={(e) => handleInputChange(index, 'incomtax', e.target.value)} id="incomtax" name="incomtax" />
              </div>
              
              </div>
    </TabPanel>
    <TabPanel header="Form 4">
    <div className='grid grid-cols-3 gap-3'>
    
    <div class="form-group">
                <label for="healthissue">आजार</label>
                <input type="text" value={formData.healthissue}
                  onChange={(e) => handleInputChange(index, 'healthissue', e.target.value)} name="healthissue" id="healthissue" />
              </div>
              <div className="form-group">
                <label for="smoking">व्यसन</label>
                <input type="text" value={formData.smoking}
                  onChange={(e) => handleInputChange(index, 'smoking', e.target.value)}  id="smoking" name="smoking" />
              </div>
              <div class="form-group">
                <label for="apagatv">अपंगत्व:</label>
                <input type="text" value={formData.apagatv}
                  onChange={(e) => handleInputChange(index, 'apagatv', e.target.value)} name="apagatv" id="apagatv" />
              </div>

              <div class="form-group">
                <label for="mariatalstatus">वैवाहिक स्थिती</label>
                <input type="text" value={formData.mariatalstatus}
                  onChange={(e) => handleInputChange(index, 'mariatalstatus', e.target.value)} name="mariatalstatus" id="mariatalstatus" />
              </div>

              <div class="form-group">
                <label for="shareholder">शेअर धारक:</label>
                <input type="text" value={formData.shareholder}
                  onChange={(e) => handleInputChange(index, 'shareholder', e.target.value)} name="shareholder" id="shareholder" />
              </div>

              <div class="form-group">
                <label for="sandharbh">संदर्भ:</label>
                <input type="text" value={formData.sandharbh}
                  onChange={(e) => handleInputChange(index, 'sandharbh', e.target.value)} name="sandharbh" id="sandharbh" />
              </div>

              <div class="form-group">
                <label for="vima">विमा:</label>
                <input type="text" value={formData.vima}
                  onChange={(e) => handleInputChange(index, 'vima', e.target.value)} name="vima" id="vima" />
              </div>

              <div class="form-group">
                <label for="toilet">शौचालय:</label>
                <input type="text" value={formData.toilet}
                  onChange={(e) => handleInputChange(index, 'toilet', e.target.value)} name="toilet" id="toilet" />
              </div>

              <div class="form-group">
                <label for="photo">फोटो:</label>
                <input type="text" value={formData.photo}
                  onChange={(e) => handleInputChange(index, 'photo', e.target.value)} name="photo" id="photo" />
              </div>

            

              


              </div>
             
     
    </TabPanel>

    <TabPanel header="Form 5">
    <div className='grid grid-cols-3 gap-3'>

    <div class="form-group">
                <label for="chand">छंद:</label>  
                <input type="text" value={formData.chand}
                  onChange={(e) => handleInputChange(index, 'chand', e.target.value)} name="chand" id="chand" />
              </div>

              <div class="form-group">
                <label for="familydoctor">कौटुंबिक डॉक्टर:</label>
                <input type="text" value={formData.familydoctor}
                  onChange={(e) => handleInputChange(index, 'familydoctor', e.target.value)} name="familydoctor" id="familydoctor" />
              </div>

              <div class="form-group">
                <label for="phoneno">फोन नं.:</label>
                <input type="text" value={formData.phoneno}
                  onChange={(e) => handleInputChange(index, 'phoneno', e.target.value)} name="phoneno" id="phoneno" />
              </div>

              <div class="form-group">
                <label for="mobile">मोबाईल </label>
                <input type="text" value={formData.mobile}
                  onChange={(e) => handleInputChange(index, 'mobile', e.target.value)} name="mobile" id="mobile" />
              </div>

              <div class="form-group">
                <label for="home">घर</label>
                <input type="text" value={formData.home}
                  onChange={(e) => handleInputChange(index, 'home', e.target.value)} name="home" id="home" />
              </div>

              <div class="form-group">
                <label for="hometype">घराचा प्रकार:</label>
                <input type="text" value={formData.hometype}
                  onChange={(e) => handleInputChange(index, 'hometype', e.target.value)} name="hometype" id="hometype" />
              </div>

              <div class="form-group">
                <label for="socialwork">समाजकार्य</label>
                <input type="text" value={formData.socialwork}
                  onChange={(e) => handleInputChange(index, 'socialwork', e.target.value)}  name="socialwork" id="socialwork" />
              </div>

              <div class="form-group">
                <label for="rajkiypad">राजकीय पद :</label>
                <input type="text" value={formData.rajkiypad}
                  onChange={(e) => handleInputChange(index, 'rajkiypad', e.target.value)} name="rajkiypad" id="rajkiypad" />
              </div>

              <div class="form-group">
                <label for="sampanti">संपत्ती:</label>
                <input type="text" value={formData.sampanti}
                  onChange={(e) => handleInputChange(index, 'sampanti', e.target.value)} name="sampanti" id="sampanti" />
              </div>

              

             </div>
              </TabPanel>

              <TabPanel header="Form 6">
    <div className='grid grid-cols-3 gap-3'>
    <div class="form-group">
                <label for="arthikvishleshan">आर्थिक विश्लेषण:</label>
                <input type="text" value={formData.arthikvishleshan}
                  onChange={(e) => handleInputChange(index, 'arthikvishleshan', e.target.value)} name="arthikvishleshan" id="arthikvishleshan" />
              </div>
              <div class="form-group">
                <label for="rajkiyvishleshan">राजकीय विश्लेषण:</label>
                <input type="text" value={formData.rajkiyvishleshan}
                  onChange={(e) => handleInputChange(index, 'rajkiyvishleshan', e.target.value)} name="rajkiyvishleshan" id="rajkiyvishleshan" />
              </div>

              <div class="form-group">
                <label for="rajkiypaksh">राजकीय पक्ष:</label>
                <input type="text" value={formData.rajkiypaksh}
                  onChange={(e) => handleInputChange(index, 'rajkiypaksh', e.target.value)} name="rajkiypaksh" id="rajkiypaksh" />
              </div>

              <div class="form-group">
                <label for="panyachastrot">पाण्याचे स्त्रोत:</label>
                <input type="text" value={formData.panyachastrot}
                  onChange={(e) => handleInputChange(index, 'panyachastrot', e.target.value)}  name="panyachastrot" id="panyachastrot" />
              </div>

              <div class="form-group">
                <label for="chaviconection">चावी कनेक्शन:</label>
                <input type="text" value={formData.chaviconection}
                  onChange={(e) => handleInputChange(index, 'chaviconection', e.target.value)}  name="chaviconection" id="chaviconection" />
              </div>

              <div class="form-group">
                <label for="gharphala">घरफाळा:</label>
                <input type="text"  value={formData.gharphala}
                  onChange={(e) => handleInputChange(index, 'gharphala', e.target.value)}   name="gharphala" id="gharphala" />
              </div>

              <div class="form-group">
                <label for="panipatti">पाणीपट्टी:</label>
                <input type="text" value={formData.panipatti}
                  onChange={(e) => handleInputChange(index, 'panipatti', e.target.value)} name="panipatti" id="panipatti" />
              </div>

              <div class="form-group">
                <label for="kaushalya">कौशल्य:</label>
                <input type="text" value={formData.kaushalya}
                  onChange={(e) => handleInputChange(index, 'kaushalya', e.target.value)} name="kaushalya" id="kaushalya" />
              </div>

              <div class="form-group">
                <label for="gyasconnection">गॅस कनेक्शन :</label>
                <input type="text" value={formData.gyasconnection}
                  onChange={(e) => handleInputChange(index, 'gyasconnection', e.target.value)} name="gyasconnection" id="gyasconnection" />
              </div>

              <div class="form-group">
                <label for="lightconnection">लाईट  कनेक्शन :</label>
                <input type="text" value={formData.lightconnection}
                  onChange={(e) => handleInputChange(index, 'lightconnection', e.target.value)} name="lightconnection" id="lightconnection" />
              </div>

              <div class="form-group">
                <label for="language"> माहीत असणारी/येणारी  भाषा :</label>
                <input type="text"  value={formData.language}
                  onChange={(e) => handleInputChange(index, 'language', e.target.value)} name="language" id="language" />
              </div>

              <div class="form-group">
                <label for="mothername">आईचे  नाव :</label>
                <input type="text" value={formData.mothername}
                  onChange={(e) => handleInputChange(index, 'mothername', e.target.value)} name="mothername" id="mothername" />
                  
              </div>
              </div>
              </TabPanel>
</TabView>
            
              
              
            


            </div>
            <div className="form-container">

            </div>

          </div>
        ))}
        <div className="px-3 py-5">
        <div className='flex justify-between mt-3 '>
       <button className='bg-[aqua]  border px-3 py-3 rounded-md' disabled={activeIndex === 0 ? true : false} onClick={handlePrev} >Prev</button>
       {
        activeIndex === 5 ?
        <div className="submitbtn">
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
        :
        <button className='bg-[green] text-[#fff]  border px-3 py-3 rounded-md' onClick={handleClisk}>Next</button>
         
       }
       </div>
     
       </div>

    </>
  );
}

