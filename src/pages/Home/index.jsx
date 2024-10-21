import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <div>
          <h1>Sistema de Stock</h1>
        </div>
        <div className="flex items-center">
          <Button text="Cadastrar produto"/>
          <Button text="Buscar todos os produtos"/>
          <Button text="Deletar produto"/>
        </div>
      </section>
    </>
  );
}
