import { Component } from '@angular/core';
import { RecbodyComponent } from '../recbody/recbody.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RecbodyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
