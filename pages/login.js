import Head from 'next/head'
import Layout from '../components/layout'

export default function Login() {
  return (
    <Layout login>
      <Head>
        <title>Login</title>
      </Head>
      <table>
        <tr><td><label for="usernam">Username</label></td><td><input name="username" type="text" /></td></tr>
        <tr><td><label for="Password">Password</label></td><td><input name="password" type="password" /></td></tr>            
      </table>
    </Layout>        
  )
}
