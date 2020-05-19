import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {

    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    onActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active -> Inactive :: ' + this.activeToInactiveCounter);
    }

    onInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('Inactive -> Active :: ' + this.inactiveToActiveCounter);
    }

}
