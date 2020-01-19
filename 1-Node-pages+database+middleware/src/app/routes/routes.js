const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app)=> {

  app.get('/', function(req , resp){
    resp.send(
      `
        <html>
          <head>
            <meta charset="utf-8"
          </head>
          <body>
            <h1> Casa do Código </h1>
          </body>
        </html>
      `
      );
    });
    
    app.get('/livros', function(req , resp){
      const livroDao = new LivroDao(db);
      livroDao.listar()
              .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                  livros: livros
                }
              ))
              .catch(err => console.log(err));

      // livroDao.listar(function(err , res){
      //   resp.marko(
      //       require('../views/livros/lista/lista.marko'),
      //       {
      //         livros: res
      //       })
      //   })

      // db.all('SELECT * FROM livros',function(err , res){
        
      //   resp.marko(
      //       require('../views/livros/lista/lista.marko'),
      //       {
      //         livros: res
      //       }
      //     );
      //   });
    });
  }