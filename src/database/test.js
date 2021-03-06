
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dado na tabela
    /*await saveOrphanage(db, {
        lat: "-27.8931629",
        lng: "-48.5910872",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "12334123",
        images: [
            "https://images.unsplash.com/photo-1595295407820-3563d04518be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1598539961915-040bb3be3f69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hours: "Horário de visitas Das 8h as 18h",
        open_on_weekends: "1" 
    })*/

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

    //deletar dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id='3'")  
})