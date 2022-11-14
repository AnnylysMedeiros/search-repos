const RepoCard = ({reposAll,index}) => {
    return (
        <li key={index}>
        <span><strong>Nome do repositório: </strong>{reposAll.name}</span> 
        <span><strong>Usuário: </strong>{reposAll.owner.login}</span>
        <a href={reposAll.html_url} target="_blank"><button>Acesse</button></a>
        </li>
    )
};

export default RepoCard;