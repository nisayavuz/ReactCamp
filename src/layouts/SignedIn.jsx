import React from 'react'
import {Dropdown, Image, Menu } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://as2.ftcdn.net/v2/jpg/03/42/99/71/1000_F_342997143_wz7x1yR7KWhmhSKF9OHwuQ2W4W7IUDvH.jpg"/>
            <Dropdown pointing="top right" text='Nisa'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
