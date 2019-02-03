export class CounterService {
    activeToInactive: number = 0; 
    inactiveToActive: number = 0;

    incrementInactive() {
        this.activeToInactive++;
        console.log(this.activeToInactive);
    }

    incrementActive() {
        this.inactiveToActive++;
        console.log(this.inactiveToActive);
    }
}