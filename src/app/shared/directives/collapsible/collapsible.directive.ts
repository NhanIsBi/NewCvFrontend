import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';
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
  selector: '[ehiringCollapsibleTitle]',
})
export class CollapsibleTitleDirective {
  @Output() isOpenChange = new EventEmitter<boolean>();
  isOpen = true;
  setOpenState(open: boolean) {
    this.isOpen = open;
    this.isOpenChange.emit(this.isOpen);
  }

  @HostListener('click')
  toggleState() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}

@Directive({
  selector: '[ehiringCollapsibleContent]',
})
export class CollapsibleContentDirective {
  player?: AnimationPlayer;

  constructor(
    private el: ElementRef<HTMLElement>,
    private builder: AnimationBuilder
  ) {
    this.el.nativeElement.style.overflowY = 'hidden';
    this.el.nativeElement.style.marginTop = '1.5rem';
  }

  show(show: boolean) {
    if (this.player) {
      this.player.destroy();
    }
    const metadata = show ? this.expand() : this.collapse();
    const factory = this.builder.build(metadata);
    this.player = factory.create(this.el.nativeElement);
    this.player.play();
  }

  collapse() {
    return [
      style({
        height: this.el.nativeElement.scrollHeight + 'px',
        filter: 'none',
        marginTop: '1.5rem',
      }),
      animate(
        '200ms linear',
        style({ height: '0', filter: 'blur(5px)', marginTop: '0' })
      ),
    ];
  }

  expand() {
    return [
      style({ height: '0', filter: 'blur(5px)', marginTop: '0' }),
      animate(
        '200ms linear',
        style({
          height: this.el.nativeElement.scrollHeight + 'px',
          filter: 'none',
          marginTop: '1.5rem',
        })
      ),
      animate(
        '1ms linear',
        style({
          height: 'unset',
          filter: 'none',
          marginTop: '1.5rem',
        })
      ),
    ];
  }
}

@Directive({
  selector: '[ehiringCollapsible]',
})
export class CollapsibleDirective implements AfterContentInit, OnDestroy {
  @ContentChildren(CollapsibleTitleDirective, { descendants: true })
  titleQuery?: QueryList<CollapsibleTitleDirective>;
  @ContentChildren(CollapsibleContentDirective)
  contentQuery?: QueryList<CollapsibleContentDirective>;

  titleDirective?: CollapsibleTitleDirective;

  contentDirective?: CollapsibleContentDirective;

  subscription = new Subscription();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterContentInit(): void {
    this.titleDirective = this.titleQuery?.first;
    this.contentDirective = this.contentQuery?.first;
    this.subscription.add(this.attachTitle());

    if (this.el.nativeElement.classList.contains('collapsed')) {
      this.titleDirective?.setOpenState(false);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  attachTitle() {
    return this.titleDirective?.isOpenChange.subscribe((data) => {
      this.contentDirective?.show(data);

      if (data) {
        if (this.el.nativeElement.classList.contains('collapsed')) {
          this.el.nativeElement.classList.remove('collapsed');
        }
      } else {
        this.el.nativeElement.classList.add('collapsed');
      }
    });
  }
}
