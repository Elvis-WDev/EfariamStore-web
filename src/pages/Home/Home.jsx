import React from 'react'
import { Slider } from '../../components';
import { Box, Grid, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

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
            <Grid className='Product_cards_section' container>
                <Grid className='prduct_card' item xs={3}>
                    faw
                </Grid>
                <Grid className='prduct_card' item xs={3}>
                    faw
                </Grid>
                <Grid className='prduct_card' item xs={3}>
                    faw
                </Grid>
                <Grid className='prduct_card' item xs={3}>
                    faw
                </Grid>
                <Grid className='prduct_card' item xs={3}>
                    faw
                </Grid>
                <Grid className='prduct_card' item xs={3}>
                    faw
                </Grid>
            </Grid>


        </main >

    )
}
