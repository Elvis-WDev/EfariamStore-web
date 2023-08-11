
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
                </Grid>
            </Grid>
        </Card>
    )
}
