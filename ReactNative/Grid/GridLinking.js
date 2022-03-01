const config = {
    screens:{
        DeepLink:{
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
    }
}
    

const GridLinking = {
    prefixes: ["myapp://app"],
    config,
};
  
export default GridLinking;