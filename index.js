function receivesAFunction(xyz) {
    return xyz();
}

function returnsANamedFunction() {
    function namedFunction() {

    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}