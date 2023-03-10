import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const builder = () => ({
  output: "",

  generateWords({ count, min, max }) {
    const countInternal =
      count ?? (min && max) ? getRandomInt(min, max) : undefined ?? 3;
    this.output = lorem.generateWords(countInternal);
    return this;
  },

  generateSentences({ count, min, max }) {
    const countInternal =
      count ?? (min && max) ? getRandomInt(min, max) : undefined ?? 3;
    this.output = lorem.generateSentences(countInternal);
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
export { lorem, getRandomInt, capitalizeFirstLetter };
