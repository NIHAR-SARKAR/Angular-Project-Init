import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: 'Child.Component.html'
})
export class ChildComponent {
    @Input() ChildDetails: string;
    Childmessage = 'Hello Child';
    ValueForparent = '';
    constructor() {
        this.ValueForparent = this.ChildDetails + ' - To parent';
    }
}
