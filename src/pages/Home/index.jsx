import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <div>
          <h1>Sistema de Stock</h1>
        </div>
        <div className="flex items-center">
          <Link to="/registerProduct">
            <Button text="Cadastrar produto" />
          </Link>
          <Link to="/getAllProducts">
            <Button text="Buscar todos os produtos" />
          </Link>
          <Link to="/deleteProduct">
            <Button text="Deletar produto" />
          </Link>
        </div>
      </section>
    </>
  );
}
