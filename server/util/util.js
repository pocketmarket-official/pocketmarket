const renameKeys = (mapping, objArr) => {
    const renamedObjArr = [];

    for(let obj of objArr) {
        const renamedObj = {};

        for(let [before, after] of Object.entries(mapping)) {
            if(obj[before]) {
                renamedObj[after] = obj[before];
            }
        }

        renamedObjArr.push(renamedObj);
    }

    return renamedObjArr;
}

module.exports = {renameKeys};