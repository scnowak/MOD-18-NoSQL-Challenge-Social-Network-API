// module getting random words, generating random posts, generating random colors, and getting random indices from the lorum array. It might be useful in scenarios where random content or data is needed, such as in testing, placeholder generation, or other similar applications.
const seuss = [
    'do',
    'you',
    'like',
    'green',
    'eggs',
    'and',
    'ham',
    'i',
    'do',
    'not',
    'like',
    'them',
    'sam',
    'i',
    'am',
    'i',
    'do',
    'not',
    'like',
    'green',
    'eggs',
    'and',
    'ham',
  ];
  
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  
  const getRandomWord = () => `${seuss[genRandomIndex(seuss)]}`;
  
  const getRandomPost = (words) => {
    let post = '';
    for (let i = 0; i < words; i++) {
      post += ` ${getRandomWord()}`;
    }
    return post;
  };
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  module.exports = {
    getRandomWord,
    getRandomColor,
    getRandomPost,
    genRandomIndex,
  };