import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material"
import { useState } from "react"
import undraw_World from '../../../images/undraw_World.png'
import Adminlogin from "./AdminLogin"
import Registration from "./Registration"

const TabPanel = (props)=>{
    const {children, value, index} = props
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const LoginReg = () => {
    const [value, setValue] = useState(0)
    const handleChange=(event, newvalue)=>{
        setValue(newvalue)
    }

  return (
    <>
    <Grid container sx={{height:'90vh'}}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage:`url(${undraw_World})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
            display:{xs:'none', sm:'block'}
        }}>
        </Grid>
        <Grid item lg={5} sm={7} xs={12}>
            <Card sx={{width:'100%', height:'100%'}}>
                <Box sx={{mx:3}}>
                    <Box sx={{borderBottom:1, borderColor:'divider'}}>
                        <Tabs value={value} textColor="primary" indicatorColor="primary" onChange={handleChange}>
                            <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                            <Tab label='Registration' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                        </Tabs>
                    </Box>
                        <TabPanel value={value} index={0}>
                            <Adminlogin/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Registration/>
                        </TabPanel>
                    </Box>
            </Card>
        </Grid>
    </Grid>
    </>
  )
}

export default LoginReg