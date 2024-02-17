import React, { useContext, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';


const ProfileUpdate = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [updateData, setUpdateData] = useState({});
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/user/view/single/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setUserData(data.data);
            });


    }, [authUser, updateData])


    // store data 
   
    const [dataValue, setDataValue] = useState({});
    const [userImage, setUserImage] = useState('');

    const handleImage = (e) => {
        setUserImage(e.target.files[0])

    }




    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }


    const refSubmitDis = useRef();

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const storeData = { ...dataValue, image: userImage }
        const config = {
            headers: {
                'content-type': 'multipart/form-data',

            }
        };
        if (userData?._id) {
            axios
                .put(`http://localhost:5000/api/user/auth/profile/update/${userData?._id}`, storeData, config)
                .then(data => {
                    event.target.reset();
                    toast.success(`${data.data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setUpdateData(data.data)
                    refSubmitDis.current.removeAttribute("disabled");
                })
                .catch(error => {
                    if (error?.response?.data?.success === false) {
                        toast.error(`${error?.response?.data?.message}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        refSubmitDis.current.removeAttribute("disabled");
                    }
                })
        } else {
            toast.error(`something is worng`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }



    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <section className='user-deposit'>
                <div className="container-custom">
                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Profile Update</h1>
                        </div>


                    </div>

                    {/* deposit input  */}
                    <div className="pb-4">
                        <div className='user-deposit-input-area'>
                            <div className="row">
                                <div className="col-12">


                                    <div className="w-100">
                                        <form onSubmit={handleSubmitData}>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                                        <input type="text" defaultValue={userData?.fname} onBlur={handleInputBlur} name='fname' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                                        <input type="text" defaultValue={userData?.lname} onBlur={handleInputBlur} name='lname' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
                                                        <input type="tel" defaultValue={userData?.mobile} onBlur={handleInputBlur} name='mobile' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <div className="form-group ">
                                                            <label for="country">Country</label>
                                                            <select name="country" className="form-control" defaultValue={userData?.country} onBlur={handleInputBlur} id="country">
                                                                <option >select</option>
                                                                <option data-mobile_code="93" value="AF">Afghanistan</option>
                                                                <option data-mobile_code="358" value="AX">Aland Islands</option>
                                                                <option data-mobile_code="355" value="AL">Albania</option>
                                                                <option data-mobile_code="213" value="DZ">Algeria</option>
                                                                <option data-mobile_code="1684" value="AS">AmericanSamoa</option>
                                                                <option data-mobile_code="376" value="AD">Andorra</option>
                                                                <option data-mobile_code="244" value="AO">Angola</option>
                                                                <option data-mobile_code="1264" value="AI">Anguilla</option>
                                                                <option data-mobile_code="672" value="AQ">Antarctica</option>
                                                                <option data-mobile_code="1268" value="AG">Antigua and Barbuda</option>
                                                                <option data-mobile_code="54" value="AR">Argentina</option>
                                                                <option data-mobile_code="374" value="AM">Armenia</option>
                                                                <option data-mobile_code="297" value="AW">Aruba</option>
                                                                <option data-mobile_code="61" value="AU">Australia</option>
                                                                <option data-mobile_code="43" value="AT">Austria</option>
                                                                <option data-mobile_code="994" value="AZ">Azerbaijan</option>
                                                                <option data-mobile_code="1242" value="BS">Bahamas</option>
                                                                <option data-mobile_code="973" value="BH">Bahrain</option>
                                                                <option data-mobile_code="880" value="BD">Bangladesh</option>
                                                                <option data-mobile_code="1246" value="BB">Barbados</option>
                                                                <option data-mobile_code="375" value="BY">Belarus</option>
                                                                <option data-mobile_code="32" value="BE">Belgium</option>
                                                                <option data-mobile_code="501" value="BZ">Belize</option>
                                                                <option data-mobile_code="229" value="BJ">Benin</option>
                                                                <option data-mobile_code="1441" value="BM">Bermuda</option>
                                                                <option data-mobile_code="975" value="BT">Bhutan</option>
                                                                <option data-mobile_code="591" value="BO">Plurinational State of Bolivia</option>
                                                                <option data-mobile_code="387" value="BA">Bosnia and Herzegovina</option>
                                                                <option data-mobile_code="267" value="BW">Botswana</option>
                                                                <option data-mobile_code="55" value="BR">Brazil</option>
                                                                <option data-mobile_code="246" value="IO">British Indian Ocean Territory</option>
                                                                <option data-mobile_code="673" value="BN">Brunei Darussalam</option>
                                                                <option data-mobile_code="359" value="BG">Bulgaria</option>
                                                                <option data-mobile_code="226" value="BF">Burkina Faso</option>
                                                                <option data-mobile_code="257" value="BI">Burundi</option>
                                                                <option data-mobile_code="855" value="KH">Cambodia</option>
                                                                <option data-mobile_code="237" value="CM">Cameroon</option>
                                                                <option data-mobile_code="1" value="CA">Canada</option>
                                                                <option data-mobile_code="238" value="CV">Cape Verde</option>
                                                                <option data-mobile_code=" 345" value="KY">Cayman Islands</option>
                                                                <option data-mobile_code="236" value="CF">Central African Republic</option>
                                                                <option data-mobile_code="235" value="TD">Chad</option>
                                                                <option data-mobile_code="56" value="CL">Chile</option>
                                                                <option data-mobile_code="86" value="CN">China</option>
                                                                <option data-mobile_code="61" value="CX">Christmas Island</option>
                                                                <option data-mobile_code="61" value="CC">Cocos (Keeling) Islands</option>
                                                                <option data-mobile_code="57" value="CO">Colombia</option>
                                                                <option data-mobile_code="269" value="KM">Comoros</option>
                                                                <option data-mobile_code="242" value="CG">Congo</option>
                                                                <option data-mobile_code="243" value="CD">The Democratic Republic of the Congo</option>
                                                                <option data-mobile_code="682" value="CK">Cook Islands</option>
                                                                <option data-mobile_code="506" value="CR">Costa Rica</option>
                                                                <option data-mobile_code="225" value="CI">Cote d'Ivoire</option>
                                                                <option data-mobile_code="385" value="HR">Croatia</option>
                                                                <option data-mobile_code="53" value="CU">Cuba</option>
                                                                <option data-mobile_code="357" value="CY">Cyprus</option>
                                                                <option data-mobile_code="420" value="CZ">Czech Republic</option>
                                                                <option data-mobile_code="45" value="DK">Denmark</option>
                                                                <option data-mobile_code="253" value="DJ">Djibouti</option>
                                                                <option data-mobile_code="1767" value="DM">Dominica</option>
                                                                <option data-mobile_code="1849" value="DO">Dominican Republic</option>
                                                                <option data-mobile_code="593" value="EC">Ecuador</option>
                                                                <option data-mobile_code="20" value="EG">Egypt</option>
                                                                <option data-mobile_code="503" value="SV">El Salvador</option>
                                                                <option data-mobile_code="240" value="GQ">Equatorial Guinea</option>
                                                                <option data-mobile_code="291" value="ER">Eritrea</option>
                                                                <option data-mobile_code="372" value="EE">Estonia</option>
                                                                <option data-mobile_code="251" value="ET">Ethiopia</option>
                                                                <option data-mobile_code="500" value="FK">Falkland Islands (Malvinas)</option>
                                                                <option data-mobile_code="298" value="FO">Faroe Islands</option>
                                                                <option data-mobile_code="679" value="FJ">Fiji</option>
                                                                <option data-mobile_code="358" value="FI">Finland</option>
                                                                <option data-mobile_code="33" value="FR">France</option>
                                                                <option data-mobile_code="594" value="GF">French Guiana</option>
                                                                <option data-mobile_code="689" value="PF">French Polynesia</option>
                                                                <option data-mobile_code="241" value="GA">Gabon</option>
                                                                <option data-mobile_code="220" value="GM">Gambia</option>
                                                                <option data-mobile_code="995" value="GE">Georgia</option>
                                                                <option data-mobile_code="49" value="DE">Germany</option>
                                                                <option data-mobile_code="233" value="GH">Ghana</option>
                                                                <option data-mobile_code="350" value="GI">Gibraltar</option>
                                                                <option data-mobile_code="30" value="GR">Greece</option>
                                                                <option data-mobile_code="299" value="GL">Greenland</option>
                                                                <option data-mobile_code="1473" value="GD">Grenada</option>
                                                                <option data-mobile_code="590" value="GP">Guadeloupe</option>
                                                                <option data-mobile_code="1671" value="GU">Guam</option>
                                                                <option data-mobile_code="502" value="GT">Guatemala</option>
                                                                <option data-mobile_code="44" value="GG">Guernsey</option>
                                                                <option data-mobile_code="224" value="GN">Guinea</option>
                                                                <option data-mobile_code="245" value="GW">Guinea-Bissau</option>
                                                                <option data-mobile_code="595" value="GY">Guyana</option>
                                                                <option data-mobile_code="509" value="HT">Haiti</option>
                                                                <option data-mobile_code="379" value="VA">Holy See (Vatican City State)</option>
                                                                <option data-mobile_code="504" value="HN">Honduras</option>
                                                                <option data-mobile_code="852" value="HK">Hong Kong</option>
                                                                <option data-mobile_code="36" value="HU">Hungary</option>
                                                                <option data-mobile_code="354" value="IS">Iceland</option>
                                                                <option data-mobile_code="91" value="IN">India</option>
                                                                <option data-mobile_code="62" value="ID">Indonesia</option>
                                                                <option data-mobile_code="98" value="IR">Iran, Islamic Republic of Persian Gulf</option>
                                                                <option data-mobile_code="964" value="IQ">Iraq</option>
                                                                <option data-mobile_code="353" value="IE">Ireland</option>
                                                                <option data-mobile_code="44" value="IM">Isle of Man</option>
                                                                <option data-mobile_code="972" value="IL">Israel</option>
                                                                <option data-mobile_code="39" value="IT">Italy</option>
                                                                <option data-mobile_code="1876" value="JM">Jamaica</option>
                                                                <option data-mobile_code="81" value="JP">Japan</option>
                                                                <option data-mobile_code="44" value="JE">Jersey</option>
                                                                <option data-mobile_code="962" value="JO">Jordan</option>
                                                                <option data-mobile_code="77" value="KZ">Kazakhstan</option>
                                                                <option data-mobile_code="254" value="KE">Kenya</option>
                                                                <option data-mobile_code="686" value="KI">Kiribati</option>
                                                                <option data-mobile_code="850" value="KP">Democratic People's Republic of Korea</option>
                                                                <option data-mobile_code="82" value="KR">Republic of South Korea</option>
                                                                <option data-mobile_code="965" value="KW">Kuwait</option>
                                                                <option data-mobile_code="996" value="KG">Kyrgyzstan</option>
                                                                <option data-mobile_code="856" value="LA">Laos</option>
                                                                <option data-mobile_code="371" value="LV">Latvia</option>
                                                                <option data-mobile_code="961" value="LB">Lebanon</option>
                                                                <option data-mobile_code="266" value="LS">Lesotho</option>
                                                                <option data-mobile_code="231" value="LR">Liberia</option>
                                                                <option data-mobile_code="218" value="LY">Libyan Arab Jamahiriya</option>
                                                                <option data-mobile_code="423" value="LI">Liechtenstein</option>
                                                                <option data-mobile_code="370" value="LT">Lithuania</option>
                                                                <option data-mobile_code="352" value="LU">Luxembourg</option>
                                                                <option data-mobile_code="853" value="MO">Macao</option>
                                                                <option data-mobile_code="389" value="MK">Macedonia</option>
                                                                <option data-mobile_code="261" value="MG">Madagascar</option>
                                                                <option data-mobile_code="265" value="MW">Malawi</option>
                                                                <option data-mobile_code="60" value="MY">Malaysia</option>
                                                                <option data-mobile_code="960" value="MV">Maldives</option>
                                                                <option data-mobile_code="223" value="ML">Mali</option>
                                                                <option data-mobile_code="356" value="MT">Malta</option>
                                                                <option data-mobile_code="692" value="MH">Marshall Islands</option>
                                                                <option data-mobile_code="596" value="MQ">Martinique</option>
                                                                <option data-mobile_code="222" value="MR">Mauritania</option>
                                                                <option data-mobile_code="230" value="MU">Mauritius</option>
                                                                <option data-mobile_code="262" value="YT">Mayotte</option>
                                                                <option data-mobile_code="52" value="MX">Mexico</option>
                                                                <option data-mobile_code="691" value="FM">Federated States of Micronesia</option>
                                                                <option data-mobile_code="373" value="MD">Moldova</option>
                                                                <option data-mobile_code="377" value="MC">Monaco</option>
                                                                <option data-mobile_code="976" value="MN">Mongolia</option>
                                                                <option data-mobile_code="382" value="ME">Montenegro</option>
                                                                <option data-mobile_code="1664" value="MS">Montserrat</option>
                                                                <option data-mobile_code="212" value="MA">Morocco</option>
                                                                <option data-mobile_code="258" value="MZ">Mozambique</option>
                                                                <option data-mobile_code="95" value="MM">Myanmar</option>
                                                                <option data-mobile_code="264" value="NA">Namibia</option>
                                                                <option data-mobile_code="674" value="NR">Nauru</option>
                                                                <option data-mobile_code="977" value="NP">Nepal</option>
                                                                <option data-mobile_code="31" value="NL">Netherlands</option>
                                                                <option data-mobile_code="599" value="AN">Netherlands Antilles</option>
                                                                <option data-mobile_code="687" value="NC">New Caledonia</option>
                                                                <option data-mobile_code="64" value="NZ">New Zealand</option>
                                                                <option data-mobile_code="505" value="NI">Nicaragua</option>
                                                                <option data-mobile_code="227" value="NE">Niger</option>
                                                                <option data-mobile_code="234" value="NG">Nigeria</option>
                                                                <option data-mobile_code="683" value="NU">Niue</option>
                                                                <option data-mobile_code="672" value="NF">Norfolk Island</option>
                                                                <option data-mobile_code="1670" value="MP">Northern Mariana Islands</option>
                                                                <option data-mobile_code="47" value="NO">Norway</option>
                                                                <option data-mobile_code="968" value="OM">Oman</option>
                                                                <option data-mobile_code="92" value="PK">Pakistan</option>
                                                                <option data-mobile_code="680" value="PW">Palau</option>
                                                                <option data-mobile_code="970" value="PS">Palestinian Territory</option>
                                                                <option data-mobile_code="507" value="PA">Panama</option>
                                                                <option data-mobile_code="675" value="PG">Papua New Guinea</option>
                                                                <option data-mobile_code="595" value="PY">Paraguay</option>
                                                                <option data-mobile_code="51" value="PE">Peru</option>
                                                                <option data-mobile_code="63" value="PH">Philippines</option>
                                                                <option data-mobile_code="872" value="PN">Pitcairn</option>
                                                                <option data-mobile_code="48" value="PL">Poland</option>
                                                                <option data-mobile_code="351" value="PT">Portugal</option>
                                                                <option data-mobile_code="1939" value="PR">Puerto Rico</option>
                                                                <option data-mobile_code="974" value="QA">Qatar</option>
                                                                <option data-mobile_code="40" value="RO">Romania</option>
                                                                <option data-mobile_code="7" value="RU">Russia</option>
                                                                <option data-mobile_code="250" value="RW">Rwanda</option>
                                                                <option data-mobile_code="262" value="RE">Reunion</option>
                                                                <option data-mobile_code="590" value="BL">Saint Barthelemy</option>
                                                                <option data-mobile_code="290" value="SH">Saint Helena</option>
                                                                <option data-mobile_code="1869" value="KN">Saint Kitts and Nevis</option>
                                                                <option data-mobile_code="1758" value="LC">Saint Lucia</option>
                                                                <option data-mobile_code="590" value="MF">Saint Martin</option>
                                                                <option data-mobile_code="508" value="PM">Saint Pierre and Miquelon</option>
                                                                <option data-mobile_code="1784" value="VC">Saint Vincent and the Grenadines</option>
                                                                <option data-mobile_code="685" value="WS">Samoa</option>
                                                                <option data-mobile_code="378" value="SM">San Marino</option>
                                                                <option data-mobile_code="239" value="ST">Sao Tome and Principe</option>
                                                                <option data-mobile_code="966" value="SA">Saudi Arabia</option>
                                                                <option data-mobile_code="221" value="SN">Senegal</option>
                                                                <option data-mobile_code="381" value="RS">Serbia</option>
                                                                <option data-mobile_code="248" value="SC">Seychelles</option>
                                                                <option data-mobile_code="232" value="SL">Sierra Leone</option>
                                                                <option data-mobile_code="65" value="SG">Singapore</option>
                                                                <option data-mobile_code="421" value="SK">Slovakia</option>
                                                                <option data-mobile_code="386" value="SI">Slovenia</option>
                                                                <option data-mobile_code="677" value="SB">Solomon Islands</option>
                                                                <option data-mobile_code="252" value="SO">Somalia</option>
                                                                <option data-mobile_code="27" value="ZA">South Africa</option>
                                                                <option data-mobile_code="211" value="SS">South Sudan</option>
                                                                <option data-mobile_code="500" value="GS">South Georgia and the South Sandwich Islands</option>
                                                                <option data-mobile_code="34" value="ES">Spain</option>
                                                                <option data-mobile_code="94" value="LK">Sri Lanka</option>
                                                                <option data-mobile_code="249" value="SD">Sudan</option>
                                                                <option data-mobile_code="597" value="SR">Suricountry</option>
                                                                <option data-mobile_code="47" value="SJ">Svalbard and Jan Mayen</option>
                                                                <option data-mobile_code="268" value="SZ">Swaziland</option>
                                                                <option data-mobile_code="46" value="SE">Sweden</option>
                                                                <option data-mobile_code="41" value="CH">Switzerland</option>
                                                                <option data-mobile_code="963" value="SY">Syrian Arab Republic</option>
                                                                <option data-mobile_code="886" value="TW">Taiwan</option>
                                                                <option data-mobile_code="992" value="TJ">Tajikistan</option>
                                                                <option data-mobile_code="255" value="TZ">Tanzania</option>
                                                                <option data-mobile_code="66" value="TH">Thailand</option>
                                                                <option data-mobile_code="670" value="TL">Timor-Leste</option>
                                                                <option data-mobile_code="228" value="TG">Togo</option>
                                                                <option data-mobile_code="690" value="TK">Tokelau</option>
                                                                <option data-mobile_code="676" value="TO">Tonga</option>
                                                                <option data-mobile_code="1868" value="TT">Trinidad and Tobago</option>
                                                                <option data-mobile_code="216" value="TN">Tunisia</option>
                                                                <option data-mobile_code="90" value="TR">Turkey</option>
                                                                <option data-mobile_code="993" value="TM">Turkmenistan</option>
                                                                <option data-mobile_code="1649" value="TC">Turks and Caicos Islands</option>
                                                                <option data-mobile_code="688" value="TV">Tuvalu</option>
                                                                <option data-mobile_code="256" value="UG">Uganda</option>
                                                                <option data-mobile_code="380" value="UA">Ukraine</option>
                                                                <option data-mobile_code="971" value="AE">United Arab Emirates</option>
                                                                <option data-mobile_code="44" value="GB">United Kingdom</option>
                                                                <option data-mobile_code="1" value="US">United States</option>
                                                                <option data-mobile_code="598" value="UY">Uruguay</option>
                                                                <option data-mobile_code="998" value="UZ">Uzbekistan</option>
                                                                <option data-mobile_code="678" value="VU">Vanuatu</option>
                                                                <option data-mobile_code="58" value="VE">Venezuela</option>
                                                                <option data-mobile_code="84" value="VN">Vietnam</option>
                                                                <option data-mobile_code="1284" value="VG">British Virgin Islands</option>
                                                                <option data-mobile_code="1340" value="VI">U.S. Virgin Islands</option>
                                                                <option data-mobile_code="681" value="WF">Wallis and Futuna</option>
                                                                <option data-mobile_code="967" value="YE">Yemen</option>
                                                                <option data-mobile_code="260" value="ZM">Zambia</option>
                                                                <option data-mobile_code="263" value="ZW">Zimbabwe</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                                                        <input type="text" defaultValue={userData?.address} onBlur={handleInputBlur} name='address' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                                                        <input type="text" defaultValue={userData?.city} onBlur={handleInputBlur} name='city' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                                                        <input type="text" defaultValue={userData?.state} onBlur={handleInputBlur} name='state' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Zip postal</label>
                                                        <input type="text" defaultValue={userData?.zip_postal} onBlur={handleInputBlur} name='zip_postal' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Photo</label>
                                                        <input type="file" onChange={handleImage} name='picture' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            </div>

                                            <button type='submit' ref={refSubmitDis} className="btn btn-primary">Update</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default ProfileUpdate;