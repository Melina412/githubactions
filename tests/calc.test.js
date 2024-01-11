import { add } from '../calc.js';

test('Funktion soll addieren', () => {
  expect(add(1, 2)).toBe(3);
});
