import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecbodyComponent } from './recbody.component';

describe('RecbodyComponent', () => {
  let component: RecbodyComponent;
  let fixture: ComponentFixture<RecbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
