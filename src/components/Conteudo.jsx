
export default function Conteudo(props) {



  return (
    <>
      <section>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            accusantium repudiandae enim delectus deserunt itaque
            necessitatibus, obcaecati fugiat suscipit quasi error animi impedit
            esse distinctio! Cum impedit modi tempora laborum?
          </p>
          <p>
            Incidunt quaerat id neque non dolores atque architecto, praesentium
            rerum, veritatis magnam iure rem commodi itaque illo vel modi
            numquam libero quam labore exercitationem laboriosam fuga est. Nam,
            nostrum commodi!
          </p>
          <p>
            Velit tempora, hic facilis suscipit, beatae aliquid saepe harum
            aspernatur deserunt unde dicta blanditiis quod maiores accusantium
            sunt, itaque odit. Facilis magnam eius sapiente illo reiciendis
            quisquam saepe nisi at?
          </p>
          <img src={props.reactLogoProps} alt={props.reactLogoTextoAltProps} />
        </div>
      </section>
    </>
  );
}