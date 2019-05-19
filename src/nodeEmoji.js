const emoji = require('node-emoji')
console.log(emoji.get('sunglasses'));
console.log(emoji.which('😎'));
console.log(emoji.get(':fast_forward:'));
console.log(emoji.emojify('I :heart: :sunglasses:!'));
console.log(emoji.random());
console.log(emoji.search('cof'));
console.log(emoji.unemojify('I ❤️ 🍕'));
console.log(emoji.find('🍕'));
console.log(emoji.find('pizza'));
console.log(emoji.hasEmoji('🍕'));
console.log(emoji.strip('⚠️🍕low 🍕disk space'));
console.log(emoji.replace('⚠️🍕low 🍕disk space', (emoji) => `${emoji.key}:`));
