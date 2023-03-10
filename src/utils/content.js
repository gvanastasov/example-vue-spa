import { faker } from "@faker-js/faker";

const builder = () => ({
  output: "",

  generateWords({ count, min, max }) {
    const countInternal =
      count ?? (min && max) ? getRandomInt(min, max) : undefined ?? 3;
    this.output = faker.lorem.words(countInternal);
    return this;
  },

  generateSentences({ count, min, max }) {
    const countInternal =
      count ?? (min && max) ? getRandomInt(min, max) : undefined ?? 3;
    this.output = faker.lorem.sentences(countInternal);
    return this;
  },

  capitalizeFirstLetter() {
    this.output = capitalizeFirstLetter(this.output);
    return this;
  },

  build() {
    return this.output;
  },
});

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default builder;
export { getRandomInt, capitalizeFirstLetter };
