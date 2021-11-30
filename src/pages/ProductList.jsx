import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>      
      <Title>Vestidos</Title>
      <FilterContainer>
      <Filter>
          <FilterText>Vista:</FilterText>
          <Select>
            <Option class="grilla">Grilla</Option>
            <Option class="lista">Lista</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrar:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option class="blanco">Blanco</Option>
            <Option class="negro">Negro</Option>
            <Option class="rojo">Rojo</Option>
            <Option class="azul">Azul</Option>
            <Option class="amarillo">Amarillo</Option>
            <Option class="verde">Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tam
            </Option>
            <Option class="xs">XS</Option>
            <Option class="s">S</Option>
            <Option class="m">M</Option>
            <Option class="l">L</Option>
            <Option class="xl">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortear:</FilterText>
          <Select>
            <Option selected class="nuevo">Nuevo</Option>
            <Option class="precio1">Precio (asc)</Option>
            <Option class="precio2">Precio (desc)</Option>
            <Option class="nom1">Nombre (asc)</Option>
            <Option class="nom2">Nombre (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
