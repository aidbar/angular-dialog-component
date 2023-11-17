import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let activeModal: NgbActiveModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
      providers: [NgbActiveModal],
    });

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    activeModal = TestBed.inject(NgbActiveModal);
  });

  it('should create the DialogComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set default values for properties', () => {
    expect(component.title).toBe('Title');
    expect(component.message).toBe('Content');
    expect(component.positiveBtnText).toBe('Yes');
    expect(component.negativeBtnText).toBe('No');
    expect(component.neutralBtnText).toBe('null');
  });

  it('should set dialog properties using setDialogProps method', () => {
    const props = {
      title: 'Custom Title',
      message: 'Custom Content',
      positiveBtnText: 'Agree',
      negativeBtnText: 'Disagree',
      neutralBtnText: 'Maybe',
    };

    component.setDialogProps(props);

    expect(component.title).toBe(props.title);
    expect(component.message).toBe(props.message);
    expect(component.positiveBtnText).toBe(props.positiveBtnText);
    expect(component.negativeBtnText).toBe(props.negativeBtnText);
    expect(component.neutralBtnText).toBe(props.neutralBtnText);
  });

  it('should close the modal with clicked value on actionTaken method', () => {
    spyOn(activeModal, 'close');

    const clickedValue = 'Agree';
    component.actionTaken(clickedValue);

    expect(activeModal.close).toHaveBeenCalledWith(JSON.stringify(clickedValue));
  });
});
