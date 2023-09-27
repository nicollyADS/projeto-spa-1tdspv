export default function ModalInserir(props){

    if(props.open){

        return(
            <div>
                <h1>Modal Inserir</h1>
                <button onClick={()=> props.setOpen(false)}>CLOSE MODAL</button>
            </div>
        );

    }
}