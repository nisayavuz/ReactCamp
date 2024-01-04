import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Dropdown, DropdownDivider, DropdownItem, Label} from "semantic-ui-react";


export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)


  return (
    <div>
        <Dropdown item text="Sepet">
              <Dropdown.Menu>
                {
                  cartItems.map((cartItem) => (

                    <Dropdown.Item key={cartItem.product.id}>
                      {cartItem.product.productName}
                      <Label>
                        {cartItem.quantity}
                      </Label>
                    </Dropdown.Item>

                  ))
                }
                {/* <Dropdown.Item>Asus Laptop</Dropdown.Item>
                <Dropdown.Item>Dell Laptop</Dropdown.Item> */}
                <DropdownDivider/>
                <Dropdown.Item as={NavLink} to="/cart" >Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    </div>
  )
}
