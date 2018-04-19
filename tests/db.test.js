const db = require('../database/index.js')

describe('Database', () =>{

  it('should retrive all records in the database', (done) => {
    db.client.query(`SELECT * from recipes`, (err, res) => {
      if(err) {
        throw err
      } else {
        var results = res.rows.length;
        console.log(results);
        expect(results).toBe(101);
        done();
      }
    });
  });
  it('should return a single record when given an id', (done) => {
    db.client.query(`SELECT * from recipes where id = 9`, (err, res) => {
      if(err) {
        throw err
      } else {
        var record = res.rows[0].id;
        console.log(record);
        expect(record).toBe(9);
        done();
      }
    });
  })
  it('should return undefined if the record id does not exist', (done) => {
    db.client.query(`SELECT * from recipes where id = 200`, (err, res) => {
      if(err) {
        var error = err
      } else {
        var record = res.Result;
        console.log(record);
        expect(record).toBe(undefined);
        done();
      }
    })
  });
})
