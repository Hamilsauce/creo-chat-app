import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardViewComponent } from './dasboard-view.component';

describe('DasboardViewComponent', () => {
  let component: DasboardViewComponent;
  let fixture: ComponentFixture<DasboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
