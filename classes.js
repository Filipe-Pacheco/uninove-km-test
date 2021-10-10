let todos_resultados = {
    // medicina: []
};
let lista_cursos = [
    {
        titulo: 'Biomedicina',
        keywords: ['Biomedicina']
    },
    {
        titulo: "Ciências Biológicas",
        keywords: ['Ciências Biológicas']
    },
    {
        titulo: "Educação Física",
        keywords: ['Educação Física']
    },
    {
        titulo: "Enfermagem",
        keywords: ['Enfermagem']
    },
    {
        titulo: "Estética e Cosmética",
        keywords: ['Estética e Cosmética']
    },
    {
        titulo: "Farmácia",
        keywords: ['Farmácia']
    },
    {
        titulo: "Fisioterapia",
        keywords: ['Fisioterapia']
    },
    {
        titulo: "Fonoaudiologia",
        keywords: ['Fonoaudiologia']
    },
    {
        titulo: "Gastronomia",
        keywords: ['Gastronomia']
    },
    {
        titulo: "Medicina",
        keywords: ['Medicina']
    },
    {
        titulo: "Medicina Veterinária",
        keywords: ['Medicina Veterinária']
    },
    {
        titulo: "Nutrição",
        keywords: ['Nutrição']
    },
    {
        titulo: "Odontologia",
        keywords: ['Odontologia']
    },
    {
        titulo: "Psicologia",
        keywords: ['Psicologia']
    },
    {
        titulo: "Radiologia",
        keywords: ['Radiologia']
    },
    {
        titulo: "Serviço Social",
        keywords: ['Serviço Social']
    },
    {
        titulo: "Engenharia Civil",
        keywords: ['Engenharia Civil', 'construção civil', 'construções', 'engenheiro civil', 'BIM']
    },
    {
        titulo: "Engenharia de Produção",
        keywords: ['Engenharia de Produção']
    },
    {
        titulo: "Engenharia Elétrica",
        keywords: ['Engenharia Elétrica']
    },
    {
        titulo: "Engenharia Mecânica",
        keywords: ['Engenharia Mecânica']
    },
    {
        titulo: "Mecatrônica",
        keywords: ['Mecatrônica']
    },
    {
        titulo: "Análise e Desenvolvimento de Sistemas",
        keywords: ['Análise e Desenvolvimento de Sistemas','Desenvolvimento de Sistemas','Análise de Sistemas']
    },
    {
        titulo: "Banco de Dados",
        keywords: ['Banco de Dados']
    },
    {
        titulo: "Ciência da Computação",
        keywords: ['Ciência da Computação','Computação','sistemas de informática0','redes corporativas','arquitetura de software','cientista da computação','cientistas da computação','Programação','Projeto de Algoritmos','Projeto de Software', "Algoritmos e Programação", "Projeto de Algoritmos", "Projeto de Software", "Organização de Computadores", "Arquitetura de Computadores", "Banco de Dados", "Circuitos Digitais", "Compiladores", "Computação Científica", "Computação Gráfica", "Computação Simbólica", "Computação  Numérica", "Data Science", "Desenvolvimento de Games", "Desenvolvimento Web e Mobile", "Engenharia de Software", "Estatística Computacional", "Probabilidade Computacional", "Estrutura de Dados", "Tecnologia da Informação", "Inteligência Artificial", "Introdução à Computação", "Engenharia de Software", "Linguagens de Programação", "Autômatos", "Álgebra Booleana", "Matemática Discreta", "Modelagem de Sistemas", "Simulação de Sistemas", "Processamento Digital", "Programação Orientada a Objetos", "Programação Paralela", "Programação Distribuída", "Redes de Computadores", "Segurança de Sistemas", "Sistemas Distribuídos", "Sistemas Operacionais", "Tecnologias para Gestão de Dados", "Teoria da Computação", "Teste de Software", "Computação Aplicada", "Álgebra Linear"]
    },
    {
        titulo: "Informática",
        keywords: ['Informática']
    },
    {
        titulo: "Jogos Digitais",
        keywords: ['Jogos Digitais']
    },
    {
        titulo: "Redes de Computadores",
        keywords: ['Redes de Computadores']
    },
    {
        titulo: "Segurança da Informação",
        keywords: ['Segurança da Informação']
    },
    {
        titulo: "Administração",
        keywords: ['Administração']
    },
    {
        titulo: "Ciências Contábeis e Econômicas",
        keywords: ['Ciências Contábeis e Econômicas','Economia','Econômica']
    },
    {
        titulo: "Comércio Exterior",
        keywords: ['Comércio Exterior']
    },
    {
        titulo: "Gestão Comercial",
        keywords: ['Gestão Comercial']
    },
    {
        titulo: "Gestão da Qualidade",
        keywords: ['Gestão da Qualidade']
    },
    {
        titulo: "Gestão da Tecnologia da Informação",
        keywords: ['Gestão da Tecnologia da Informação','Tecnologia da Informação']
    },
    {
        titulo: "Gestão de Recursos Humanos",
        keywords: ['Gestão de Recursos Humanos','Recursos Humanos']
    },
    {
        titulo: "Gestão Financeira",
        keywords: ['Gestão Financeira']
    },
    {
        titulo: "Gestão Hospitalar",
        keywords: ['Gestão Hospitalar']
    },
    {
        titulo: "Logística",
        keywords: ['Logística']
    },
    {
        titulo: "Marketing",
        keywords: ['Marketing']
    },
    {
        titulo: "Turismo",
        keywords: ['Turismo']
    },
    {
        titulo: "Arquitetura e Urbanismo",
        keywords: ['Arquitetura e Urbanismo','Urbanismo']
    },
    {
        titulo: "Design",
        keywords: ['Design Gráfico', 'Design de produto', 'Design de produtos', 'comunicação visual', ' identidade visual', 'tipografia', 'interfaces gráficas', 'interface gráfica', 'experiência do usuário']
    },
    {
        titulo: "Direito",
        keywords: ['Direito']
    },
    {
        titulo: "Comunicação Institucional",
        keywords: ['Comunicação Institucional']
    },
    {
        titulo: "Fotografia",
        keywords: ['Fotografia']
    },
    {
        titulo: "Jornalismo",
        keywords: ['Jornalismo']
    },
    {
        titulo: "Produção Audiovisual",
        keywords: ['Produção Audiovisual']
    },
    {
        titulo: "Publicidade e Propaganda",
        keywords: ['Publicidade','Propaganda']
    },
    {
        titulo: "Rádio e TV",
        keywords: ['Rádio e TV','Rádio','tv']
    },
    {
        titulo: "Educação Especial",
        keywords: ['Educação Especial']
    },
    {
        titulo: "Pedagogia",
        keywords: ['Pedagogia','educação']
    }
]
let count = 0


function verificaClasse(livro){
    // Obtendo a descrição e o titulo e transfomando para maiúsculo, sem acento e pontuação.
    let descricao_livro = livro.Descricao.toLocaleUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let titulo_livro = livro.title.toLocaleUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // console.log('----------------------Analisando o livro: ' + titulo_livro)

    // Arrays analisados
    let tags_analisadas = []
    let keywordsCurso = []

    for (i in lista_cursos){
        let curso = lista_cursos[i];
        // console.log('Analisando semelhança para ' + curso.titulo);

        // Loop dentro das keywords
        for (y in curso.keywords){
            // keyword em análise
            let keywordNow = curso.keywords[y].toLocaleUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            //  console.log('keywordNow: ' + keywordNow)

            // A descrição tem alguma das keywords?
            // console.log('A descrição tem a keyword: ' + keywordNow + '?')
            let descricao_contem_bool = descricao_livro.includes(keywordNow);
            // console.log('Resposta: ' + descricao_contem_bool)

            // O título tem alguma das keywords?
            // console.log('O título tem a keyword: ' + keywordNow + '?')
            let titulo_contem_bool = titulo_livro.includes(keywordNow);
            // console.log('Resposta: ' + titulo_contem_bool)

            // Se o título ou a descrição tem, adicione o nome do curso correspondente ao array tags_analisadas
            if (descricao_contem_bool || titulo_contem_bool){
                tags_analisadas.push(curso.titulo)
                keywordsCurso.push(keywordNow)

                // Se a classe existe adicione o livro ao array, se não, crie um array no objeto "todos_resuldos" e então adicione o livro
                if (todos_resultados[curso.titulo]){
                    todos_resultados[curso.titulo].push({title: livro.title, descricao: livro.Descricao})
                    

                } else {
                    todos_resultados[curso.titulo] = []
                    todos_resultados[curso.titulo].push({title: livro.title, descricao: livro.Descricao})
                }
            }
        }
    }
    // console.log(count)
    livro.Tag_Descricao = tags_analisadas;
    livro.keywordsCurso = keywordsCurso;
    return tags_analisadas;
}

function grifaKeywords(id_elemento_texto_alvo, array_keywords){
    var options = {
        "element": "mark",
        "className": "",
        "exclude": [],
        "separateWordSearch": false,
        "accuracy": "partially",
        "diacritics": true,
        "synonyms": {},
        "iframes": false,
        "iframesTimeout": 5000,
        "acrossElements": false,
        "caseSensitive": false,
        "ignoreJoiners": false,
        "ignorePunctuation": [":;.,-–—‒_(){}[]!'\"+=".split("")],
    }

    var context = document.getElementById(id_elemento_texto_alvo); // requires an element with class "context" to exist
    var instance = new Mark(context);
    instance.mark(array_keywords, options); // Aqui passamos a palavra ou o array que desejamos marcar
}
