import React, { Suspense, useCallback, useRef } from 'react'
import { userLogin } from '../../redux/features/auth/auth.action'
import '../../shared/style/main.css'

const Button = React.lazy(() => import('../../shared/components/Button'))
const TextInput = React.lazy(() => import('../../shared/components/TextInput'))

export default function Login() {
  const email = useRef(null)
  const password = useRef(null)

  const loginAPI = async () => {
    userLogin(email, password)
  }

  const handleFormSubmit = useCallback(() => {
    loginAPI()
  }, [])

  return (
    <div className='login-form'>
      <h1>Sign In</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TextInput
          placeholder='Email Address'
          type='email'
          required
          value={email}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <TextInput
          placeholder='Password'
          type='password'
          required
          value={password}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Button text='Sign In' onClick={handleFormSubmit} />
      </Suspense>
    </div>
  )
}
