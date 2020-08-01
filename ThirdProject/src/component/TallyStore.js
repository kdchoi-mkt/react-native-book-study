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

const handleAction = (action) => {
    switch (action.type) {
        case 'INCREMENT':
            increment()
            break;
        case 'DECREMENT':
            decrement()
            break;
        case 'ZERO':
            zero()
            break;
        default:
            // None
    }
    instance.emitChange();
};

Dispatcher.register(handleAction);

const instance = new TallyStore();
export default instance;