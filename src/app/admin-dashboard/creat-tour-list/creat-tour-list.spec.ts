import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTourList } from './creat-tour-list';

describe('CreatTourList', () => {
  let component: CreatTourList;
  let fixture: ComponentFixture<CreatTourList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatTourList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatTourList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
