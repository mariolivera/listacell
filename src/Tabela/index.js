export default function Tabela(){
let contatos =[
    {
        nome: 'chiqin',
        Telefone:'85-98888-8888',
        Cidade:'caucaia'
    },
    {
        nome: 'alves',
        Telefone:'85-96666-8888',
        Cidade:'caucaia'
    },
    {
        nome: 'causon',
        Telefone:'85-97777-6688',
        Cidade:'fortaleza'
    },
    {
        nome: 'valesca',
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
                    {contatos.map(()=>{
                        return (
                            <tr>
                                <td>Nome</td>
                                <td>Telefone</td>
                                <td>Cidade</td>
                            </tr>
                        )
                    })}
                </tbody>
            </tabela>
        </>
    );
}