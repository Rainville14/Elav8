function objectExists(root, path) {
    let obj = root;
    let exists = true;

    path.split('.').map((val) => {
        obj = obj[val] ? obj[val] : false;
        if(!obj) {
            exists = false;
        }
    })
    return exists;
}

module.exports = {
    objectExists
};