const config = {
    screens: {
        ScreenA: "a",
        ScreenB: {
        path: "b/:message",
        parse: {
            message: (message) => `${message}`
        }
        },
        ScreenC: "c",
    }
}
  
const linking = {
prefixes: ["myapp://app"],
config,
};
  
export default linking;