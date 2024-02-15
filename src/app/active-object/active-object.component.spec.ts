import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveObjectComponent } from './active-object.component';

describe('ActiveObjectComponent', () => {
  let component: ActiveObjectComponent;
  let fixture: ComponentFixture<ActiveObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
