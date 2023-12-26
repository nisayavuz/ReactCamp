import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
        <Menu.Item>
        <Button onClick={signIn} primary style={{marginRight:"0.5em"}}>Giriş Yap</Button>
        <Button primary >Kayıt Ol</Button>
        </Menu.Item>
    </div>
  )
}

