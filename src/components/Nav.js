import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import LoginButton from './LoginButton'

const Nav = () => {
  return (
    <Menu borderless>
      <Container>
        <Menu.Item as={NavLink} exact to='/' name='home'/>
        <Menu.Item as={NavLink} to='/add' name='new question' />
        <Menu.Item as={NavLink} to='/leaderboard' name='leader board' />
        <Menu.Menu position='right'>
          <LoginButton />
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Nav