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
            <Grid container spacing={2} sx={{ border: "1px solid black" }} className='Navbar'>
                <Grid item xs={6} md={6} sx={{ border: "1px solid blue" }} className='Navbar__logo'>
                    <img src="./img/Navbar/Logo_Efariam.png" alt="" />
                    <h6>EFARIAM STORE</h6>
                </Grid>
                <Grid item xs={5} md={5} sx={{ border: "1px solid blue" }} className='Navbar__menu'>
                    {pages.map((page) => (
                        <Button className='items'
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Grid>
                <Grid item xs={1} md={1} sx={{ border: "1px solid blue" }} className='Navbar__menu'>
                    <IconButton aria-label="delete" size="large">
                        <ShoppingCartOutlinedIcon fontSize="inherit" />
                    </IconButton>
                </Grid>
            </Grid>

        </>
    )
}
