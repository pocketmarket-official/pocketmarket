import axios from "axios";

function collections(){
    axios.get("/api/stores_store/")
        .then((res) => {
            return res;
        });
}

function festivalStore(festivalId){
    axios.get("/api/festivals_join/")
        .then((res) => {
            let storesId = res.data.filter(
                (elt) => {
                    if (elt.festivalCd === festivalId) {
                        return true;
                    }
                }
            );
            axios.get("/api/stores_store/") // URL EXCHANGE RELATIVE
                .then((res) => {
                    let stores = res.data.filter(
                        (elt) => {
                            let flag = false;
                            storesId.forEach((row) => {
                                if (row.storeCd === elt.id) {
                                    flag = true;
                                }
                            });
                            if (flag) return true;
                        });
                    return stores;
                });
        });
}

function mainAxios(user_email) {
    axios.get("/api/users_user/") // URL EXCHANGE RELATIVE
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                axios.get("/api/trades_saleHeader/") // URl EXCHANGE RELATIVE
                    .then((res) => {
                        let i = 0;
                        res.data.filter((elt) => {
                            if (elt.user === userId && (elt.orderStatus != 6 && elt.orderStatus != 7)) {
                                i++;
                            }
                        });
                        let result = {userId:userId, orderCount:i};
                        console.log('==1');
                        console.log(result);
                        return result;
                    });
            });
}

export {collections, festivalStore, mainAxios}