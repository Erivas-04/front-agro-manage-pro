import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovementCageView } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-dialog-movement',
  templateUrl: './dialog-movement.component.html'
})
export class DialogMovementComponent {
  @Output() close = new EventEmitter();
  @Input({required: true}) detail: MovementCageView;

}
