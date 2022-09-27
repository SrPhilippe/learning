function getUserDefinedSettings() {
    return {
        difficulty: 'easy',
        startingCash: 0
    }
}


// const cash = getUserDefinedSettings().startingCash || 500
const cash = getUserDefinedSettings().startingCash ?? 500

// "??" The coalescing nullish operator don't look for falsy values.
// instead, it will only return the right value if the left was not nullish

console.log(cash)