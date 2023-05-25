import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Map,
  LocalPhone,
  Email,
} from "@mui/icons-material";
import payment from "../assets/payment.png";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>_.HAVEN._</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          ullam, non minima voluptatem rerum esse dolor harum repudiandae
          repellendus voluptate.
        </Desc>
        <SocialContainer>
          <SocialIcon bgcolor="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bgcolor="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bgcolor="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bgcolor="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Map style={{ marginRight: 10 }} />
          C4, Sai Residency, Baner, Pune-411054, Maharashtra, India
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: 10 }} />
          +91 8981335155
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: 10 }} />
          support@haven.com
        </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  );
};

export default Footer;
