const {
  simpanBuku, semuaBuku, cariBukuById, editBukuById, deleteBukuById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: simpanBuku,
  },
  {
    method: 'GET',
    path: '/books',
    handler: semuaBuku,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: cariBukuById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBukuById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBukuById,
  },
];

module.exports = routes;
