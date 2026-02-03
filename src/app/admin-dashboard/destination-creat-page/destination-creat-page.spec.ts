import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCreatPage } from './destination-creat-page';

describe('DestinationCreatPage', () => {
  let component: DestinationCreatPage;
  let fixture: ComponentFixture<DestinationCreatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationCreatPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationCreatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
