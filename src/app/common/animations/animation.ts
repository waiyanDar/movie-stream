// src/app/shared/animations.ts
import { animate, animation, group, keyframes, query, state, style, transition, trigger, useAnimation } from '@angular/animations';

export const fadeAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration }} {{ easing }}')
], {
  params: {
    duration: '500ms',
    easing: 'ease-out'
  }
});

export const slideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
  ])
]);

export const testAnimation = trigger('cardAnimation', [
  state('email', style({
    transform: 'translateX(0)'
  })),
  state('password', style({
    transform: 'translateX(-100%)'
  })),
  transition('email => password', animate('400ms ease-in-out')),
  transition('password => email', animate('400ms ease-in-out'))
]) 

export const testAnimation1 = trigger('paneChange', [
  transition('* => *', [
    query(':self', [
      style({height: '{{startHeight}}px'})
    ]),
    query(':enter', [
      style({opacity: 0, scale: 0.9})
    ]),
    query(':leave', [
      style({opacity: 1, scale: 1}),
      animate('0.2s ease-in', style({opacity: 0, scale: 0.9}))
    ]),
    group([
      query(':self', [
        animate('0.2s ease-in', style({height: '*'}))
      ]),
      query(':enter', [
        animate('0.2s ease-in', style({opacity: 1, scale: 1}))
      ]),
    ], { params: { startHeight: 0 } })
  ])
])