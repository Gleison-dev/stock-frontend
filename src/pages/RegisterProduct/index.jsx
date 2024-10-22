import { Link } from "react-router-dom";
import Button from "../../components/Button/index";
import Input from "../../components/Input";

export default function RegisterProduct() {
  return (
    <>
      <section>
        <div className="mt-10">
          <Link to="/">
            <Button text="Voltar" />
          </Link>
        </div>
        <div className="flex flex-col justify-center h-screen items-center">
          <div>
            <h1 className="text-3xl">Cadastrar Produto</h1>
          </div>
          <div className="mt-10">
            <form className="space-y-5">
              <label htmlFor="nameProduct">Nome do Produto:</label> <br />
              <Input type="text" placeholder="Digite o nome do produto" /> <br />
              <label htmlFor="brandProduct">Marca do Produto:</label> <br />
              <Input type="text" placeholder="Digite a marca do produto" /> <br />
              <label htmlFor="quantityProduct">Quantidade do Produto:</label> <br />
              <Input
                type="number"
                placeholder="Digite a quantidade disponível"
              /> <br />
              <label htmlFor="priceProduct">Preço do Produto:</label> <br />
              <Input type="number" placeholder="Insira o preço do produto"/> <br />
              <Button text="Cadastrar"/>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
