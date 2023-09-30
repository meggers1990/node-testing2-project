exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {id: 1, name: 'Alejandro', email: 'ale@gmail.com'},
          {id: 2, name: 'Ian', email: 'ian@gmail.com'},
          {id: 3, name: 'daniel', email: 'daniel@gmail.com'}
        ]);
      });
  };