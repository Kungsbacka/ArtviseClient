import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtviseComponent } from './artvise.component';

describe('ArtviseComponent', () => {
  let component: ArtviseComponent;
  let fixture: ComponentFixture<ArtviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
