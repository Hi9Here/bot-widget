export default {
  app: {
    token: "86b660ee54e54a4ba610d31d0a014e20", // <- enter your token here
    muted: false, // <- mute microphone by default
    googleIt: true // <- ask users to google their request, in case of input.unknown action
  },
  locale: {
    strings: {
      welcomeTitle: "Hello, ask something to get started",
      welcomeDescription: `You can type "Hello" for example. Or just press on the microphone to talk`,
      offlineTitle: "Oh, no!",
      offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
      queryTitle: "Ask me something...",
      voiceTitle: "Go ahead, im listening..."
    },
    settings: {
      speechLang: "en-GB", // <- output language
      recognitionLang: "en-US" // <- input(recognition) language
    }
  }
}