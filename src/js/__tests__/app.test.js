import Settings from '../app';

test('straight test', () => {
  const settings = new Settings();
  // Вот в этом месте я понял что задание на выдержку в нейминге
  expect([...settings.settings.keys()]).toEqual(['theme', 'music', 'difficulty']);
});

test('return test', () => {
  const settings = new Settings();
  // А тут я понял что у jest'а проблемы с геттерами
  expect([...settings.get().keys()]).toEqual(['theme', 'music', 'difficulty']);
});
