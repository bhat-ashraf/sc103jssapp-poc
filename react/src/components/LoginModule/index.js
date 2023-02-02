import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const LoginModule = (props) => {
  const [isPageData, setPageData] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const MatchUser = () => {
    console.log('isPageData', isPageData);
    console.log('email', email);

    // isuser exist
    isPageData.getuserdetails.map((user, index) => {
      if (user.email === email || user.password === password) {
        let loggedInUser = {
          username: user.firstName + ' ' + user.lastName,
          isSuperUser: user.isSuperUser,
        };
        localStorage.setItem('user', loggedInUser);
        history.push('/');
      }
    });
  };

  const handleEmailChange = (Event) => {
    setEmail(Event.target.value);
  };
  const handlePasswordChange = (Event) => {
    setPassword(Event.target.value);
  };
  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    };
    fetch('https://my.api.mockaroo.com/api/v1/getuserdetails?key=3f001a10', requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setPageData({
            error: null,
            areUsersLoaded: true,
            getuserdetails: result,
          });
        },
        (error) => {
          console.log('error: ', error);
        }
      );
  }, []);

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0 d-flex align-items-center">
          <MDBCol md="4">
            <MDBCardImage
              src={props.fields.Image.value.src}
              alt={props.fields.Image.value.alt}
              className="rounded-t-5 rounded-tr-lg-0"
              fluid
            />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody>
              <MDBInput
                wrapperClass="mb-4"
                label={props.fields.FormFields[0].fields.label.value}
                id={props.fields.FormFields[0].fields.name}
                type={props.fields.FormFields[0].fields.fieldType.value}
                onChange={handleEmailChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label={props.fields.FormFields[1].fields.label.value}
                id={props.fields.FormFields[1].fields.name}
                type={props.fields.FormFields[1].fields.fieldType.value}
                onChange={handlePasswordChange}
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
                <a href={props.fields.ForgetPasswordLink.value.href}>
                  {props.fields.ForgetPasswordText.value}?
                </a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={MatchUser}>
                {props.fields.SignInText.value}
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default LoginModule;
