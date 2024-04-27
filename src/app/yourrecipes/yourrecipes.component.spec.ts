import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourrecipesComponent } from './yourrecipes.component';

describe('YourrecipesComponent', () => {
  let component: YourrecipesComponent;
  let fixture: ComponentFixture<YourrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourrecipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
