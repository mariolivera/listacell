export default function Tabela(){
let contatos =[
    {
        Nome: 'chiqin',
        Telefone:'85-98888-8888',
        Cidade:'caucaia'
    },
    {
        Nome: 'alves',
        Telefone:'85-96666-8888',
        Cidade:'caucaia'
    },
    {
        Nome: 'causon',
        Telefone:'85-97777-6688',
        Cidade:'fortaleza'
    },
    {
        Nome: 'valesca',
        Telefone:'85-9348-5445',
        Cidade:'icarai'
    }
]


    return (
        <>
            <hr/>
            <tabela className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>

                <tbody>
                    {contatos.map(({Nome, Telefone, Cidade},index)=>{
                        return (
                            <tr key={index} cursor="poiter" _houver={{bg: "gray.100"}}>
                                <td>{Nome}</td>
                                <td>{Telefone}</td>
                                <td>{Cidade}</td>
                            
                                <td>
                                    <button onclick="buscarparaeditar(${cadaItem.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-outline-warning btn-sm">
                                        Editar
                                    </button> 
                                    <button onclick="excluir(${cadaItem.id})" class="btn btn-outline-danger">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </tabela>
        </>
    );
}