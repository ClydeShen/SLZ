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
import useAuth from 'hooks/useAuth'
import Image from 'next/image'
import React, { memo } from 'react'
import { imgPlaceHolder } from 'utils/constants'

const AuthNavbar = memo(() => {
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
                  <Avatar sx={{ width: 32, height: 32 }}>
                    <Image
                      src={user?.user_metadata?.avatar_url || imgPlaceHolder()}
                      alt={user?.user_metadata?.email || 'Unknown User'}
                      width={32}
                      height={32}
                    ></Image>
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorUserMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
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
