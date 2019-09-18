import React, {useContext, useState, useEffect, useRef}  from 'react';


const App: React.FC = () => {
  const [state, setState] = useState({country: '', firstName: '', middleInitial: '', lastName: '', dobDay: '', dobMonth: '', dobYear:'', email:'', phoneCode: '', phoneNumber: '', documentCountry: '', documentType: ''});
  const formValue = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {setState({...state, [event.target.name]: event.target.value.trim()})}

  const country = useRef<HTMLSelectElement>(null);
  const firstName = useRef<HTMLInputElement>(null);
  const middleInitial = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const dobDay = useRef<HTMLSelectElement>(null);
  const dobMonth = useRef<HTMLSelectElement>(null);
  const dobYear = useRef<HTMLSelectElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phoneCode = useRef<HTMLSelectElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const documentCountry = useRef<HTMLSelectElement>(null);
  const documentType = useRef<HTMLSelectElement>(null);

  return (
    <div className="layout-grid">
      <div className='layout-title'>Identity</div>

      <div className='section-grid'>
        <div>Country Information</div>
        <div>
          <label>Country</label>
          <select value={state.country} name="country" onChange={formValue} ref={country}>
            <option value="First Choice">United States</option>
            <option value="Second Choice">Bulgaria</option>
            <option value="Second Choice">China</option>
          </select>
        </div>
      </div>

      <div className='section-grid'>
        <div>Personal Information</div>
        <div>
          <label>Full Name</label>
          <div className='fullname-grid'>
            <input type="text" placeholder='First Name' value={state.firstName} name="firstName" onChange={formValue} ref={firstName}/>
            <input type="text" placeholder='M.I.' value={state.middleInitial} name="middleInitial" onChange={formValue} ref={middleInitial}/>
            <input type="text" placeholder='Last Name' value={state.lastName} name="lastName" onChange={formValue} ref={lastName}/>
          </div>
          <small>Your real name, as found on your document</small>
          <label>Date of Birth</label>
            <div className='dob-grid'>
              <select value={state.dobDay} name="dobDay" onChange={formValue} ref={dobDay}>
                <option value="1">01</option>
                <option value="2">02</option>
              </select>
              <select value={state.dobMonth} name="dobMonth" onChange={formValue} ref={dobMonth}>
                <option value="1">January</option>
                <option value="2">Febuary</option>
              </select>
              <select value={state.dobYear} name="dobYear" onChange={formValue} ref={dobYear}>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
              </select>
          </div>
        </div>
      </div>

      <div className='section-grid'>
        <div>Contact Information</div>
        <div>
          <label>Email Addresss</label>
          <input type="text" placeholder='@' value={state.email} name="email" onChange={formValue} ref={email} />
          <label>Phone Number</label>
            <div className='phone-grid'>
              <select value={state.phoneCode} name="phoneCode" onChange={formValue} ref={phoneCode}>
                <option value="359">+359</option>
                <option value="1">+1</option>
                <option value="86">+86</option>
              </select>
              <input type="number" value={state.phoneNumber} name="phoneNumber" onChange={formValue} ref={phoneNumber} />
            </div>
        </div>
      </div>

      <div className='section-grid'>
        <div>Document Verification</div>
        <div>
          <label>Document Issuing Country</label>
          <select value={state.documentCountry} name="documentCountry" onChange={formValue} ref={documentCountry}>
            <option value="United States">United States</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="China">China</option>
          </select>
          <label>Document type</label>
          <select value={state.documentType} name="documentType" onChange={formValue} ref={documentType}>
            <option value="Passport">Passport</option>
            <option value="Drivers Licence">Drivers Licence</option>
            <option value="National Identity Document">National Identity Document</option>
          </select>
          <div className='doc-grid'>
            <label>Front of Document
            <input type="file" />
            </label>
            <label>Back of Document
            <input type="file" />
            </label>
          </div>
        </div>
      </div>

      <div className='section-grid'>
        <div>Photo Verification</div>
        <div>
        <label>Selfie
            <input type="file" />
            </label>
        </div>
      </div>

      <div className='section-grid'>
        <div></div>
        <div className='btn-grid'>
          <div></div>
          <button>Submit Identity</button>
        </div>
      </div>


    </div>
  );
}

export { App };
