import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisOptionComponent } from './favoris-option.component';

describe('FavorisOptionComponent', () => {
  let component: FavorisOptionComponent;
  let fixture: ComponentFixture<FavorisOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorisOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
