const db = require('../models');
module.exports = function (app) {
    // * `/api/books` (get) - Will be used to get saved books from database
    app.get('/api/books', function (req, res) {
        db.Books.find({})
            .then(function (dbBooks) {
                console.log(dbBooks);
                res.json({
                    books: dbBooks
                })
                // res.json({
                //     books: [
                //         {
                //             _id: '1',
                //             title: 'harry potter and the philosophers stone zzz',
                //             authors: ["jk rowling"],
                //             description: 'something about magic',
                //             image: 'https://vignette.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest?cb=20190410054019',
                //             url: 'https://www.google.com.au',
                //             isbn: '12345'
                //         },
                //         {
                //             _id: '2',
                //             title: 'harry potter and the philosophers stone',
                //             authors: ["jk rowling"],
                //             description: 'something about magic',
                //             image: 'https://vignette.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest?cb=20190410054019',
                //             url: 'https://www.google.com.au',
                //             isbn: '12345'
                //         }
                //     ]
                // })
            })
    });

    // * `/api/books` (post) - Will be used to save a new book to the database.
    app.post('/api/books', function (req, res) {
        var bookObj = req.body;
        if (bookObj._id) {
            delete bookObj._id;
        }
        // push to database
        db.Books.create(bookObj).then(function (dbBook) {
            res.json({
                status: "success",
            });
        }).catch(function(err) {
            console.log(err);
            res.status(500).send('Something broke!')
        })
    });

    // * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
    app.delete('/api/books/:bookId', function (req, res) {
        // delete from database
        db.Books.deleteOne({ _id: req.params.bookId }).then(function (result) {
            res.json({
                status: "success"
            });
        }).catch(function (err) {
            console.log(err);
            res.status(500).send('Something broke!')
        })
    });

    

    //////////////////////////////////////////////////////////////////////////////
    //
    //
    //
    // app.get('/dev/search', function (req, res) {
    //     res.json({
    //         books: [
    //             {
    //                 _id: '1',
    //                 title: 'hunger games 1',
    //                 authors: ["suzanne collins"],
    //                 description: 'battle royale',
    //                 image: 'https://vignette.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest?cb=20190410054019',
    //                 url: 'https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_(film)',
    //                 isbn: '1111'
    //             },
    //             {
    //                 _id: '2',
    //                 title: 'hunger games 1',
    //                 authors: ["suzanne collins"],
    //                 description: 'battle royale',
    //                 image: 'https://vignette.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest?cb=20190410054019',
    //                 url: 'https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_(film)',
    //                 isbn: '2222'
    //             },
    //             {
    //                 _id: '3',
    //                 title: 'hunger games 1',
    //                 authors: ["suzanne collins"],
    //                 description: 'battle royale',
    //                 image: 'https://vignette.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest?cb=20190410054019',
    //                 url: 'https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_(film)',
    //                 isbn: '3333'
    //             }
    //         ]
    //     })
    // });
    //
    //
    //
    //////////////////////////////////////////////////////////////////////////////
}
