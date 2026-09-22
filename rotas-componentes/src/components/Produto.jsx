import "./Produto.css"

function Produto(props) {
    return ( 
        <div className="produto">

            <img src="https://placehold.co/150" />
            <h2>{props.nome} </h2>
            <p>{props.descricao}</p>
            <button>{props.comprar}</button>

        </div>
     );
}

export default Produto;