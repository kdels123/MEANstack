import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellWorldComponent } from './hell-world.component';

describe('HellWorldComponent', () => {
  let component: HellWorldComponent;
  let fixture: ComponentFixture<HellWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
