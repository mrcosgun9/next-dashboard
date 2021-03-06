import { Checkbox, Input, InputWrapper, PasswordInput, } from "@mantine/core"
import { showNotification } from '@mantine/notifications';

import { useRouter } from 'next/router'
import Link from "next/link";
import { At, Lock } from 'tabler-icons-react';
function Login() {
  const router = useRouter()
  const formSubmit = async (event) => {
    event.preventDefault();
    showNotification({
      title: 'İşlem Başarılı',
      message: 'Giriş İşlemi Başarılı',
      color: "teal"
    })
    router.push("/");
  };
  return <>
    <div className="login-page ">
      <div className="form-container">
        <div className="w-full text-center font-bold text-xl mb-3">
          LOGO
        </div>
        <form onSubmit={formSubmit}>
          <div className="form-title">
            <h1>Welcome to DashBoard 👋</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate nostrum voluptatibus.</p>
          </div>
          <div className="form-content">
            <InputWrapper
              className="mb-2"
              id="input-demo"
              required
              label="Email Address"
              error=""
              size="xs"
            >
              <Input id="input-demo" placeholder="Your Email" icon={<At size={12} />} size="xs" />
            </InputWrapper>

            <PasswordInput
              placeholder="Password"
              label="Password"
              icon={<Lock size={12} />}
              size="xs"
              required
            />

          </div>
          <div className="form-footer">
            <div className="flex flex-col">
              <div className="pb-1">
                <Checkbox
                  size="xs"
                  label="Remember Me"
                />
              </div>
              <Link href="/auth/forgot-password">
                <a className="link-sm primary-link">
                  Forgot Password?
                </a>
              </Link>
            </div>
            <button className="button primary-button">
              Login
            </button>
            <div className="w-full text-xs text-center pt-4">
              New on our platform?
              <Link href="/auth/register">
                <a>Create an account</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
}
export default Login
