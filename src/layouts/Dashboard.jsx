import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>

          <GridColumn width={4}>
          <Categories/>
          </GridColumn>

          <GridColumn width={12}>
          <Routes>
            <Route exact path='/' Component={ProductList}></Route>
            <Route path='/products' Component={ProductList}></Route>
            <Route path='/products/:id' Component={ProductDetail}></Route>
            <Route path='/cart' Component={CartDetail}></Route>
          </Routes>
          </GridColumn>

        </GridRow>
      </Grid>

    </div>
  )
}
