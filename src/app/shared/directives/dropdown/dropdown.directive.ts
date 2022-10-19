import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ehiringDropdownToggle]',
})
export class DropdownToggleDirective {
  @Output() isShowChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('click')
  focus() {
    this.el.nativeElement.focus();
  }

  @HostListener('focus')
  focusState() {
    this.isShowChange.emit(true);
  }

  @HostListener('blur')
  blurState() {
    this.isShowChange.emit(false);
  }

  @HostListener('window:resize')
  onResize() {
    this.el.nativeElement.blur();
  }

  @HostListener('window:scroll')
  onScroll() {
    console.log('hello');

    this.el.nativeElement.blur();
  }
}

@Directive({
  selector: '[ehiringDropdownContent]',
})
export class DropdownContentDirective {
  canBlur = true;
  parentEle!: HTMLElement;
  isShow = false;

  constructor(private el: ElementRef<HTMLElement>) {
    el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.display = 'none';
  }

  @HostListener('mouseover')
  dontBlur() {
    this.canBlur = false;
  }

  @HostListener('mouseout')
  doBlur() {
    this.canBlur = true;
  }

  @HostListener('click')
  clickHandle() {
    this.canBlur = true;
    this.drop(false);
  }

  drop(show: boolean) {
    if (this.isShow != show) {
      if (this.canBlur) {
        this.isShow = show;
        const nativeElement = this.el.nativeElement;
        nativeElement.style.display = show ? 'block' : 'none';

        if (
          document.body.clientWidth -
            nativeElement.getBoundingClientRect().left <=
          nativeElement.offsetWidth
        ) {
          nativeElement.style.left =
            this.parentEle?.getBoundingClientRect().right -
            nativeElement.offsetWidth +
            'px';
        } else {
          nativeElement.style.left =
            this.parentEle.getBoundingClientRect().left + 'px';
        }

        if (
          document.body.clientHeight -
            nativeElement.getBoundingClientRect().top <=
          nativeElement.offsetHeight
        ) {
          nativeElement.style.top =
            this.parentEle.getBoundingClientRect().top -
            nativeElement.offsetHeight -
            parseInt(
              window
                .getComputedStyle(nativeElement)
                .getPropertyValue('margin-bottom')
            ) *
              2 +
            'px';
        } else {
          nativeElement.style.top =
            this.parentEle.getBoundingClientRect().bottom + 'px';
        }
      }
    }
  }

  setParentEle(parentEle: HTMLElement) {
    this.parentEle = parentEle;
  }
}

@Directive({
  selector: '[ehiringDropdown]',
})
export class DropdownDirective implements AfterContentInit, OnDestroy {
  @ContentChildren(DropdownToggleDirective)
  toggleQuery?: QueryList<DropdownToggleDirective>;
  @ContentChildren(DropdownContentDirective)
  contentQuery?: QueryList<DropdownContentDirective>;

  toggleDirective?: DropdownToggleDirective;

  contentDirective?: DropdownContentDirective;

  subscription = new Subscription();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterContentInit(): void {
    this.toggleDirective = this.toggleQuery?.first;
    this.contentDirective = this.contentQuery?.first;

    this.contentDirective?.setParentEle(this.el.nativeElement);
    this.subscription.add(this.attachTitle());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  attachTitle() {
    return this.toggleDirective?.isShowChange.subscribe((data) => {
      this.contentDirective?.drop(data);
    });
  }
}
