// the idea of this file is that maps the `exercises/react` with the files in order to create an object that can then used for pagination

const files = [
  {filename: '14_block-scope'},
  {filename: '19_recursion'},
  {filename: '24_higher-order-functions'}
];

export const javascriptPages = files
  .map(({filename, props}, index, fullArray) => {
    const exercise = require(`../exercises/js/${filename}`);
    Object.assign(exercise, {
      previous: fullArray[index - 1],
      next: fullArray[index + 1]
    });

    console.log(exercise)

    return {exercise, filename};
  })
  .sort((a, b) => parseInt(a.filename, 10) - parseInt(b.filename, 10));
