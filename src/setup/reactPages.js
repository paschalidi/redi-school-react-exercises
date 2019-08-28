// the idea of this file is that maps the `exercises/react` with the files in order to create an object that can then used for pagination

const files = [
  {filename: '01'},
  {filename: '02'},
  {filename: '03'},
  {filename: '04'},
  {filename: '05'},
  {filename: '06'},
  {filename: '07', props: {firstName: 'Anna', lastName: 'Pavlikova'}},
  {
    filename: '08',
    props: {person: {name: 'A react wizz', score: 100}}
  },
  {filename: '09', props: {scores: [10, 20]}},
  {filename: '10', props: {scores: [10, 20]}}
];

export const reactPages = files.map(({filename, props}, index, fullArray) => {
  const exercise = require(`../exercises/react/${filename}`);
  Object.assign(exercise, {
    previous: fullArray[index - 1],
    next: fullArray[index + 1]
  });

  return {
    exercise,
    filename,
    renderComponentWithProps: props
  };
}).sort(
  (a, b) => parseInt(a.filename, 10) - parseInt(b.filename, 10)
);
