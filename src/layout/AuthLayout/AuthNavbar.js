import {
  AppBar,
  Avatar,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar
} from '@mui/material'
import React, { memo } from 'react'
import useAuth from 'hooks/useAuth'
import Image from 'next/image'
import { imgPlaceHolder } from 'utils/constants'

const AuthNavbar = memo((props) => {
  const { logout, user } = useAuth()
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorUserMenu(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null)
  }
  const handleLogout = async () => {
    await logout()
  }
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack
              direction="row"
              sx={{ width: '100%' }}
              justifyContent="space-between"
            >
              <Stack> navs</Stack>
              <Stack>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>
                    <Image
                      src={user?.user_metadata?.avatar_url || imgPlaceHolder()}
                      alt={user?.user_metadata?.email || 'Unknown User'}
                      layout="fill"
                    ></Image>
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorUserMenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorUserMenu)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>Profile</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar disableGutters />
    </>
  )
})

AuthNavbar.displayName = 'AuthNavbar'
export default AuthNavbar
