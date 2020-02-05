function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "adam",
        "bravo": "baker",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"

    }
    result = lookup[val];
    return result;
}

phoneticLookup("charlie");
