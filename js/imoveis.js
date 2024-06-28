const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Sobrado lindo",
        "cidade": "Saltinho",
        "estado": "Minas Gerais",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave": "Quartos disponiveis",
                "valor": 6
            },
            {
                "chave": "Piscina",
                "valor": "Sim"
            }
        ]
    },
    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Kitnet",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "lugar": "apartamento",
        "favorito": false,
        "adicionais":[
            {
                "chave": "banheiro",
                "valor": 1
            }
        ]
    },
    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casarão na floresta",
        "cidade": "Americana",
        "estado": "São Paulo",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 10
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "Árvores",
                "valor": "Bastante"
            }
        ]
    },
    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa de vó",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 3
            },
            {
                "chave": "Quintal",
                "valor": "Medio"
            }
        ]
    },
    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Casa moderna",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 6
            }
        ]
    },
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa moderna iluminada",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[]
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa na floresta",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 6
            },
            {
                "chave": "Arvores",
                "valor": "muitas arvores"
            },
            {
                "chave": "Sobre local",
                "valor": "isolado"
            }
        ]
    },
    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa chique",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 5
            },
            {
                "chave": "Sobre local",
                "valor": "bairro calmo"
            }
        ]
        
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Ap Centro",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "lugar": "apartamento",
        "favorito": false,
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 1
            },
            {
                "chave": "Sobre local",
                "valor": "muito movimentado"
            }
        ]
    },
    {
        "id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Casa dos sonhos",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "lugar": "casa",
        "favorito": false,
        "adicionais":[]
    }
]

function buscarTodosImoveis() {
    return imoveisDB
}

function buscarImovelPeloId(id){
    for (let i=0; i< imoveisDB.length; i++){
        const imv = imoveisDB[i];

        if (imv.id == id){
            return imv
        }
    }

}
