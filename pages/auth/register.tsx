import { Checkbox, Input, InputWrapper, PasswordInput, } from "@mantine/core"
import { showNotification } from '@mantine/notifications';

import { useRouter } from 'next/router'
import Link from "next/link";
import { At, Lock, User } from 'tabler-icons-react';
function Register() {
  const router = useRouter()
  const formSubmit = async (event) => {
    event.preventDefault();
    showNotification({
      title: 'İşlem Başarılı',
      message: 'Kayıt İşlemi Başarılı',
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
            <h1>Adventure starts here 🚀</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate nostrum voluptatibus.</p>
          </div>
          <div className="form-content">
            <InputWrapper
              className="mb-2"
              id="input-username"
              required
              label="User Name"
              error=""
              size="xs"
            >
              <Input id="input-username" placeholder="User Name" icon={<User size={12} />} size="xs" />
            </InputWrapper>
            <InputWrapper
              className="mb-2"
              id="input-email"
              required
              label="Email Address"
              error=""
              size="xs"
            >
              <Input id="input-email" placeholder="Your Email" icon={<At size={12} />} size="xs" />
            </InputWrapper>

            <PasswordInput
              className="mb-4"
              placeholder="Password"
              label="Password"
              icon={<Lock size={12} />}
              size="xs"
              required
            />
            <div className="w-full">
              <Checkbox
                size="xs"
                label="I agree to privacy policy & terms"
              />
            </div>
          </div>
          <div className="form-footer">
            <div className="flex flex-col">

            </div>
            <button className="button primary-button">
              Sign Up
            </button>
            <div className="w-full text-xs text-center pt-4">
              Already have an account?
              <Link href="/auth/login">
                <a>Sign in instead</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
}
export default Register
