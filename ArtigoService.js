const article = [
    {
        id: 1,
        title:'Teste de intereção um',
        Descricao:'este emelçl sfsdfsflk ssdgsfsdfs fsfs d fsf sdfsfsfsafsfsdfsfsdfsdf sdfsf sfs '
    },
    {
        id: 2,
        title:'Segundo teste para interção',
        Descricao:'sfsfsfsfsf fsfsfsafs f fsdfsafsfsafs sfsfsfsafsaf  sfsfsafsfsdf sfsfsfsfsadf sdfsafsafsa sdfsfasfas fsfsafsaf fsfsaf sfdsafasf afasfsfs fsafsafa sfasfsf sfsf'
    }
];

function getArticles(){
    return article;
}

function getArticleById(ArticleId){
    return article.find(article => {
        return article.id === Number(ArticleId)
    });
}

export {getArticles, getArticleById};