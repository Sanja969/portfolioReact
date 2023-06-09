import { FooterContainer } from "./footer.styles";
import Typewriter from "typewriter-effect";
import astro from "../../assets/ff.png";

const Footer = () => {
  return (
    <FooterContainer>

        <p>Please check out my GitHub profile for more information about a public project I have worked on:</p>
          <a href="https://github.com/Sanja969?tab=repositories">
            <img
              style={{borderRadius: '150px', backgroundColor: 'transparent'}}
              src='https://freepngimg.com/save/21409-scarlet-witch-image/1024x1033'
              alt="an astronaut" 
              width={70} />
          </a>
      <h6>Copyright @Sanja969</h6>
    </FooterContainer>
  )
}

export default Footer;