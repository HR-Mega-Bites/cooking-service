const faker = require('faker');
const client = require('./index.js');

const insertData = () => {
}

const createFakeData = () => {
  for(let i = 0; i <= 100; i++) {
    const steps = Math.floor(Math.random() * 15) + 4;
    let step = 1;
    const recipe = [];

  while(step <= steps) {
      let instructions = {};
      instructions.step = `Step ${step}:`;
      instructions.title = faker.lorem.slug();
      instructions.photo = faker.image.food();
      instructions.instruction = faker.lorem.paragraph();
      step++;
      recipe.push(instructions);
    }
    
  let jsonObj = {"recipe": recipe};
  let text = `INSERT into recipes (info) VALUES($1) RETURNING *`;
    client.query(text, [jsonObj], (err, response) => {
      if(err) {
        console.error(err.stack);
      } else {
        console.log('recipe inserted');
      }
    });

  }
}
createFakeData();
