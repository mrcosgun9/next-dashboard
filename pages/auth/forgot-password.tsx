import { Input, InputWrapper } from "@mantine/core"
import { showNotification } from '@mantine/notifications';
import Link from "next/link";
import { At } from 'tabler-icons-react';

function Login() {
  const formSubmit = async (event) => {
    event.preventDefault();
    showNotification({
      title: 'İşlem Başarılı',
      message: 'Lütfen Email Adresinizi Kontrol Ediniz.',
      color: "teal"
    })
  };
  return <>
    <div className="login-page ">
      <div className="form-container">
        <div className="w-full text-center font-bold text-xl mb-3">
          LOGO
        </div>
        <form onSubmit={formSubmit}>
          <div className="form-title">
            <h1>Forgot Password? 🔒</h1>
            <p>Enter your email and we'll send you instructions to reset your password</p>
          </div>
          <div className="form-content">
            <InputWrapper
              id="input-demo"
              required
              label="Email Address"
              error=""
              size="xs"
            >
              <Input id="input-demo" placeholder="Your Email" icon={<At size={12} />} size="xs" />
            </InputWrapper>
          </div>
          <div className="form-footer">
            <div className="flex flex-col">
            </div>
            <button className="button primary-button">
              Send Reset Link
            </button>
            <div className="w-full text-xs text-center pt-4">
              <Link href="/auth/login">
                <a>Back to login</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
}
export default Login
