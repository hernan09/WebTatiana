import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerenviosComponent } from './bannerenvios.component';

describe('BannerenviosComponent', () => {
  let component: BannerenviosComponent;
  let fixture: ComponentFixture<BannerenviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerenviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerenviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
