import { SignIn } from '@clerk/nextjs'


const SignInPage = () => {
  return (
    <div>
      <main className='auth-page'>
        <SignIn />
      </main>
    </div>
  )
}

export default SignInPage
