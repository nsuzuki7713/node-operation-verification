require('dotenv').config()
const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

exports.postMessage = async () => {
  // Post a message to the channel, and await the result.
  // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: '#test',
  });

  // The result contains an identifier for the message, `ts`.
  console.log(`Successfully send message ${result.ts}`);
}

exports.fileUpload = async () => {
  // Just use the `file` argument as the documentation suggests
  // See: https://api.slack.com/methods/files.upload
  const result = await web.files.upload({
    filename: 'test.txt',
    channels: '#test',
    content: 'aaaa',
    initial_comment: 'best',
  })

  // `res` contains information about the uploaded file
  console.log('File uploaded: ', result.file.id);
}