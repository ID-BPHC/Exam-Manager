import { Header } from '../components/Header';
import BITSLogo from '../assets/BITSLogo.png';
import GoogleLogin from 'react-google-login';

export const Login = () => {

	const handleSuccess = () => {
		localStorage.setItem("token", "123");
		window.location.href = '/room-allotment';
	};

	const handleFailure = () => {
		// enqueueSnackbar('Login Failed', {variant: 'success'});
	};

  return (
    <>
      <Header toggleNavigation={() => null} login={true} />
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <img src={BITSLogo} alt="BITS Logo" height={200} />
        <h3>Click on the button to login using BITS Mail</h3>
        <GoogleLogin
          clientId="542348200921-hqhhvvccob9iif681b84jn94l91pbr9r.apps.googleusercontent.com"
          buttonText="Login using Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
					style={{background: '#1976d2'}}
        />
      </div>
    </>
  );
};
