import React, { useEffect, useState, lazy } from 'react'
import { getThemes } from '../../../../../mernmodules/ConfigsInit';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Button, Paper } from '@material-ui/core';
import styles from './AllThemes.module.css';
//import config from '../../../../../Themes/eShop';
import { getActiveTheme } from '../../../../../mernmodules/ConfigsInit';

function AllThemes() {
    //coverImg = lazy(()=>import(``)) }
    //let img;
    const [Themes, setThemes] = useState([]);
    const [ATheme, setATheme] = useState('eShop');
    const imgc = lazy(() => import(`../../../../../Themes/eShop/cover.jpg`));
    
    useEffect(() => {
       
        const allThem = async () => {
            await axios.get('/themes/allthemes').then(theme => {
                if (theme.data.success) {
                    console.log(theme.data.themes)
                    alert(theme.data.themes);
                    setThemes(theme.data.themes);
                }
            });


        }
       
        allThem();
    }, []);
    const handlethemeCustomize = () => {

    }
    const handleActivateTheme = async (menuname, id) => {
        const vars = {
            name: menuname,
            id: id,
            status: "active",
        }
        await axios.post('/themes/activate', vars);

    }
    const ThemeRender = () => Themes.filter(th => th.status !== "active").map((theme, i) => <div key={i}>
        <Grid className={styles.gridItem} component={Card}>


            <CardMedia

                image={require(`../../../../../Themes/${theme.name}/cover.jpg`)}
                title={theme.name ? theme.name : "cover image"}

            />


            <img className={styles.coverImg} src={imgc } alt={theme.name} />
            <CardContent>
                <Paper>{theme.name}</Paper>
                {theme.status === "installed" &&
                    <div className={styles.preactBtn}>
                        <div><Button color="primary" variant="outlined">Preview</Button></div>


                        <div><Button onClick={() => handleActivateTheme(theme.name, theme.id)} color="secondary" variant="outlined">Activate</Button></div>

                    </div>
                }

            </CardContent>
        </Grid>

    </div>);
    return (
        <div>
            <Paper>
                <Grid container>
                    <Grid className={styles.gridItems} item component={Card}>
                        {Themes.length && Themes.filter(theme => theme.status === "active").map((ac, i) => <div key={i}>
                            <img className={styles.coverImg} src={ imgc} alt={ac.name} />
                            <CardContent>
                                <Button onClick={handlethemeCustomize} color="primary" variant="outlined">Customize!</Button>
                            </CardContent>
                        </div>)}
                    </Grid>
                    {Themes ? <ThemeRender /> : "Loading Themes"}

                </Grid>
            </Paper>
        </div>
    )
}

export default AllThemes;
