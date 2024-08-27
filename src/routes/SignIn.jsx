import GoTrue from 'gotrue-js';

const auth = new GoTrue({
    APIUrl: 'https://allan1.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false,
  });


  

function SignIn () {
    function signup1() {
        auth.signup("gdkr100@163.com", "158216dl");
    }

    function signin1() {
        auth.login("gdkr100@163.com", "158216dl", true)
    }

    return (
        <>
            <div>SignIn</div>
            <button onClick={signup1}>Sigup</button>
            <button onClick={signin1}>Sign In</button>
        </>

    );
}

export default SignIn;
