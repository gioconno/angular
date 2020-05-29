import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    // Old approach using eventemitter
    //activatedEmitter = new EventEmitter<boolean>();

    activatedEmitter = new Subject<boolean>();

}
