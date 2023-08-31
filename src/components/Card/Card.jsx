
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const ProductCard = ({ product }) => {
    return (
        <Card className='ProductCard'>
            <Grid className='ProductCard-container' container>
                <Grid className='ProductCard-image' sx={12}>
                    <img src="./img/Cards/img_default.jpg" alt="" />
                </Grid>
                <Grid className='ProductCard-content' sx={12}>
                    <Grid className='title' sx={12}>
                        <p>Colorful T-shirt stylaf</p>
                    </Grid>
                    <Grid className='price' sx={12}>
                        <Grid container className='container' sx={12}>
                            <Grid className='price_now' sx={6}>
                                <p>$12.50</p>
                            </Grid>
                            <Grid className='price_before' sx={6}>
                                <p>$14.00</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className='content' sx={12}>
                        <Grid container className='container' sx={12}>
                            <Grid className='link' sx={6}>
                                <p> <VisibilityIcon fontSize='small' /></p>
                            </Grid>
                            <Grid className='cart' sx={6}>
                                <p><ShoppingCartIcon fontSize='small' /> </p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}
