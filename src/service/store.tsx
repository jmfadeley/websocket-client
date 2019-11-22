import { BehaviorSubject } from 'rxjs';

let socketDataSubject = new BehaviorSubject<string>('');
let socketData = socketDataSubject.asObservable();

const store = {
    getSocketData: () => {
        return socketData;
    },
    updateSocketData: (newWord: string) => {
        socketDataSubject.next(newWord);
    }
}

export default store;