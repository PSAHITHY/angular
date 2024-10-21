import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PareComponentComponent } from './pare-component.component';

describe('PareComponentComponent', () => {
  let component: PareComponentComponent;
  let fixture: ComponentFixture<PareComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PareComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
