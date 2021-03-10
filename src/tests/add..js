const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);

  //   if (result !== 7) {
  //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7.`);
  //   }
  expect(result).toBe(7);
});

test('should generate greeting message', () => {
  const name = 'Chris';
  const result = generateGreeting(name);

  expect(result).toBe(`Hello ${name}!`);
});

test('should generate greeting message for no name', () => {
  const name = 'Anonymous';
  const result = generateGreeting();

  expect(result).toBe(`Hello ${name}!`);
});
