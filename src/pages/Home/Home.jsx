import React from 'react'
import { Slider } from '../../components';
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { products } from "../../Data/DataProduct";
import { ProductCard } from '../../components/Card/Card';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Home = () => {


    return (

        <main>
            {/* SLIDER COMPONENT */}
            <Slider />

            {/* OFRECEMOS SECTION */}
            <Grid className='Introduction_section' container>
                <Grid item xs={12}>
                    <p className='title'>Ofrecemos</p>
                </Grid>
                <Grid item xs={12} sx={{ p: 2 }}>
                    <Grid container >
                        <Grid className='box-tags' item xs={6}>
                            <p>Estrategía</p>
                            <div>
                                <p>Ropa de calidad</p>
                                <p>Trabajo interactivo</p>
                                <p>Estrategia de contenido</p>
                                <p>Amplio catálogo</p>
                                <p>Diseños únicos</p>
                            </div>
                        </Grid>
                        <Grid className='box-tags' item xs={6}>
                            <p>Diseño</p>
                            <div>
                                <p>Diseños creativos</p>
                                <p>Prototipos</p>
                                <p>Diseños personalizados</p>
                                <p>Creación de recursos virtuales</p>
                                <p>Calidad de diseños</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* CATALOGO SECTION */}
            <Grid className='Catalogo_section' container>
                <Grid className='Catalogo_section-title' item xs={12}>
                    <p>Descubre nuestro catálogo</p>
                </Grid>
                <Grid className='Catalogo_section-subtitle' item xs={12}>
                    <p>​Explora nuestro armario virtual y descubre una amplia gama de estilos y
                        tendencias en nuestras categorías de ropa. </p>
                </Grid>
                <Grid className='container_cards' container>
                    <Grid container className='card' item xs={2}>
                        <Grid container className='card_image' item xs={6}>
                            <img src="./img/Catalogo/model_male.png" alt="" />
                        </Grid>
                        <Grid container className='card_descripcion' item xs={6}>
                            <Grid className='card_descripcion-title' item xs={12}>
                                <p>Hombres</p>
                            </Grid>
                            <Grid className='card_descripcion-link' item xs={12}>
                                <button ><LaunchIcon sx={{ fontSize: 12 }} /> Ver</button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className='card' item xs={2} >
                        <Grid container className='card_image' item xs={6}>
                            <img src="./img/Catalogo/model_women.png" alt="" />
                        </Grid>
                        <Grid container className='card_descripcion' item xs={6}>
                            <Grid className='card_descripcion-title' item xs={12}>
                                <p>Hombres</p>
                            </Grid>
                            <Grid className='card_descripcion-link' item xs={12}>
                                <button > <LaunchIcon sx={{ fontSize: 12 }} /> Ver</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* PRODUCTOS SECTION */}

            <Box className="Product_section">
                <Grid className="Product_section-container" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                    <Grid item xs={12} xl={2} lg={3} md={4} sm={6}>
                        <ProductCard product={products} />
                    </Grid>
                </Grid>
            </Box>

            {/* DISEÑOS SECTION */}

            <Grid container className='Design_section' sx={12}>
                <Grid sx={12} className='title'>
                    <p>Diseños exclusivos <font color="#DB545A">&#38; personalizados para cada ocasión.</font></p>
                </Grid>
                <Grid sx={12} className='images'>

                    <div class="gallery">
                        <div class="column">
                            <img src="./img/test/img1.jpg" alt="Image 5" />
                            <img src="./img/test/img2.jpg" alt="Image 6" />
                            <img src="./img/test/img4.jpg" alt="Image 7" />
                        </div>
                        <div class="column">
                            <img src="./img/test/img3.jpg" alt="Image 5" />
                            <img src="./img/test/img2.jpg" alt="Image 6" />
                            <img src="./img/test/img1.jpg" alt="Image 7" />
                        </div>
                        <div class="column">
                            <img src="./img/test/img4.jpg" alt="Image 5" />
                            <img src="./img/test/img1.jpg" alt="Image 6" />
                            <img src="./img/test/img2.jpg" alt="Image 7" />
                        </div>
                    </div>
                </Grid>
            </Grid>


            {/* SOCIAL SECTION */}

            <Grid container xs={12} className='Resen_section'>
                <Grid container xs={12} className='container'>
                    <Grid xs={12} className='box_black'>
                        <Grid xs={12} className='title'>
                            <p>Reseñas de nuestros clientes</p>
                        </Grid>
                    </Grid>
                    <Grid xs={12} className='content' container columnSpacing={3}>
                        <Grid item xs={3} className='container_card'>
                            <Grid container xs={12} className='card' spacing={0} columnSpacing={0}>
                                <Grid item className='icon' xs={12}>
                                    <p><FormatQuoteIcon sx={{ fontSize: "50px", m: 0, p: 0 }} /> </p>
                                </Grid>
                                <Grid item className='opinion' xs={12}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fugit repudiandae,
                                        alias quo aliquam eaque distinctio.</p>
                                </Grid>
                                <Grid container item className='cliente' xs={12}>
                                    <Grid item xs={12} className='image'>
                                        <img src="./img/test/user_default.png" alt="" />
                                    </Grid>
                                    <Grid item xs={12} className='name'>
                                        <p>Elvis Macas</p>
                                    </Grid>
                                    <Grid item xs={12} className='entidad'>
                                        <p>Cliente</p>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className='container_card'>
                            <Grid xs={12} className='card'>
                                Tarjeta
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className='container_card'>
                            <Grid xs={12} className='card'>
                                Tarjeta
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className='container_card'>
                            <Grid xs={12} className='card'>
                                Tarjeta
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid xs={12} className='box_none'>

                    </Grid>

                </Grid>
            </Grid>

            {/* SOCIAL SECTION */}

            <Grid container className='Social_section'>
                <Grid item xs={12}>
                    aaf
                </Grid>
                <Grid item xs={12}>
                    aaf
                </Grid>
            </Grid>

        </main >

    )
}
