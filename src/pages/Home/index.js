import React from 'react'
import { Container, Myself, BtnLink } from "./styles.js"
import images from '../../logo-me.jpg'



function Home(){

    const links = [
        {
            tittle: "Instagram",
            icone:"logo-instagram"
        },
        {
            tittle: "Pinterest",
            icone: "logo-pinterest"
        },
        {
            tittle: "Spotfy",
            icone: "musical-notes-outline"
        },
        {
            tittle: "GitHub",
            icone: "logo-github"
        }
    ];



    return(
        <Container>
            <Myself>
                <img src={images}/>
                <span>Welcome to my kingdom!</span>
            </Myself>
            <div className='container-links'>

                {links.map(link => {
                    return(
                        <BtnLink>
                            <ion-icon name={link.icone} ></ion-icon>
                            <span>{link.tittle}</span>
                        </BtnLink>
                    )
                })}                

            </div>
        </Container>
    )
}


export default Home;

