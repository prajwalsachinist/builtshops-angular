import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMarketingComponent } from './co-marketing.component';

describe('CoMarketingComponent', () => {
  let component: CoMarketingComponent;
  let fixture: ComponentFixture<CoMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
