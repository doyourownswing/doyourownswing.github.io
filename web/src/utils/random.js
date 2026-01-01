/// Scales a provided random value (between 0 and 1) to the
/// provided min and max bounds.
function scale(randomValue, min, max) {
  return Math.floor(randomValue * (max - min + 1)) + min;
}

/// Provides a random number between min and max inclusive
function getRandomInt(min, max) {
  return scale(Math.random(), min, max);
}

/// Provides an int between min and max inclusive with
/// value mapping to a logistic (aka sigmoid) function.
///
/// The `l` param signifies the rate / transformation of sigmoid function.
/// A lower l like 1 returns a more even distribution, whereas an l value
/// of 10 will return a very skewed distribution with the majority of values
/// near min and max.
function getRandomSigmoidInt(min, max, l) {
  let x = Math.random();
  let sigmoidRandom = 1 / (1 + Math.exp(-1 * scale(x, -l, l)));
  let returnVal = scale(sigmoidRandom, min, max);
  return returnVal;
}

export { getRandomInt, getRandomSigmoidInt };
