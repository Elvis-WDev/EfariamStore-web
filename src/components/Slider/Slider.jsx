

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid } from '@mui/material';

export const Slider = () => {
    return (
        <Carousel className='Slider' showThumbs={false}>
            <div>
                <Grid container className="Container">
                    <Grid className='Container__boxleft' item xs={7} md={7} >
                        <Grid className='Container__boxleft-intro' xs={7} md={7} >
                            <h6>EFARIAM STORE</h6>
                            <h1>Diseños únicos que reflejan tu personalidad.</h1>
                            <button>VER CATÁLOGO</button>
                        </Grid>
                    </Grid>
                    <Grid className='Container__boxright' item xs={5} md={5}>

                        <img src="./img/Slider/Model_slide.png" alt="" />

                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container className="Container">
                    <Grid className='Container__boxleft' item xs={6} md={6} >
                        <Grid className='Container__boxleft-intro' xs={6} md={6} >
                            <h6>EFARIAM STORE</h6>
                            <h1>Diseños únicos que reflejan tu personalidad.</h1>
                            <button>VER CATÁLOGO</button>
                        </Grid>
                    </Grid>
                    <Grid className='Container__boxright' item xs={6} md={6} >

                        <img src="./img/Slider/Model_slide.png" alt="" />

                    </Grid>
                </Grid>
            </div>

        </Carousel>
    )
}
