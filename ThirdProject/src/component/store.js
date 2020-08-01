import Dispatcher from './Dispatcher';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

let tally = {
    count: 10
};

const increment = () => {
    tally.count += 1;
}

const decrement = () => {
    tally.count -= 1;
}

const zero = () => {
    tally.count = 0;
}

class TallyStore extends EventEmitter{
    getTally(){
        return Object.assign({}, tally);
    }
    addChangeListener(callback) {
        this.addListener('CHANGE', callback);
    }
    removeChangeListener(callback){
        this.removeListener('CHANGE', callback);
    }
    emitChange() {
        this.emit('CHANGE')
    }
}

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'ZERO':
            return {
                count:0
            }
        default:
            return state;
    }
};

Dispatcher.register(handleAction);

const instance = new TallyStore();
export default instance;