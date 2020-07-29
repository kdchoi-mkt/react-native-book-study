let tally = {
    count: 0
};

class TallyStore{
    getTally(){
        return Object.assign({}, tally);
    }
}

const instance = new TallyStore();
export default instance;