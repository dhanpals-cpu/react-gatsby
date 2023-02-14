/** @jsx jsx */
import React from "react"
import image1 from '../images/img1.png'
import { jsx,Card,Image,Text,Grid,Box,Heading } from "theme-ui"
export default (props) => (
    <div>
         <Image src={image1} style={{width:'100%'}} />
          <div  sx={{
            textAlign:"center",
            maxWidth:"100%",
            marginTop:"20px"
            }}>
            <Heading>Our Services</Heading>
          </div>
          <Grid  width={[128, 200, 192]} style={{paddingLeft:"10%",marginTop:50,marginBottom:100}}>
            <Box>
              <Card
              sx={{
                maxWidth: 100,
                textAlign:"center"
              }}>
                <Image src="https://cdn-icons-png.flaticon.com/512/4924/4924013.png" />
                <Text sx={{color:"var(--theme-ui-colors-primary)"}}>SEO Service</Text>
            </Card>
            </Box>
            <Box>
            <Card
              sx={{
                maxWidth: 100,
                textAlign:"center"
              }}>
                <Image src="https://cdn-icons-png.flaticon.com/512/3254/3254935.png" />
                <Text sx={{color:"var(--theme-ui-colors-primary)"}}>Application Development</Text>
            </Card>
            </Box>
            <Box>
            <Card
              sx={{
                maxWidth: 100,
                textAlign:"center"
              }}>
                <Image src="https://cdn-icons-png.flaticon.com/512/4102/4102595.png" />
                <Text sx={{color:"var(--theme-ui-colors-primary)"}}>API Service</Text>
            </Card>
            </Box>
            <Box>
            <Card
              sx={{
                maxWidth: 100,
                textAlign:"center"
              }}>
                <Image src="https://cdn-icons-png.flaticon.com/512/3289/3289920.png" />
                <Text sx={{color:"var(--theme-ui-colors-primary)"}}>Cloud Service</Text>
            </Card>
            </Box>
          </Grid>
    </div>
  )