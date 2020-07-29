class Dispatcher{
    constructor(){
        this.isDispatching = false;
    }

    dispatch(action) {
        if (this.isDispatching) {
            throw new Error('Cannot dispatch in the middle of a dispatch');
        }
        this.isDispatching = true;
        /*
        스토어에 전잘할 것들
        */
        this.isDispatching = false;
    }
}

export default new Dispatcher();