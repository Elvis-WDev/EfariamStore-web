import React, { useState } from 'react'
import { Box, Button, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const pages = ['HOME', 'NOSOTROS', 'CATÁLOGO', 'CLIENTES'];

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <>
            <Grid container className='Navbar'>
                <Grid item xs={6} md={6} className='Navbar__logo'>
                    <img src="./img/Navbar/image.jpeg" alt="" />
                    <h6>EFARIAM STORE</h6>
                </Grid>
                <Grid item xs={6} md={6} className='Navbar__menu'>
                    {pages.map((page) => (
                        <Button className='items'
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                    <IconButton aria-label="delete" size="large" className='cart_icon'>
                        <ShoppingCartOutlinedIcon fontSize="inherit" />
                        <span className='cart_count'>0</span>
                    </IconButton>
                </Grid>

            </Grid>

        </>
    )
}
