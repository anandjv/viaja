import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-quantity-counter',
    imports: [FormsModule],
    templateUrl: './quantity-counter.html',
    styleUrl: './quantity-counter.scss'
})
export class QuantityCounter {

    @Input() initialValue = 1;
    value = 1;
    ngOnInit() {
        this.value = this.initialValue;
    }
    increment() {
        this.value++;
    }
    decrement() {
        if (this.value > 1) {
            this.value--;
        }
    }

}