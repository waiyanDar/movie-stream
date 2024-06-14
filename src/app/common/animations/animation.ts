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
      style({ height: '{{startHeight}}px' })
    ]),
    query(':enter', [
      style({ opacity: 0, scale: 0.9 })
    ]),
    query(':leave', [
      style({ opacity: 1, scale: 1 }),
      animate('2s ease-in', style({ opacity: 0, scale: 0.9 }))
    ]),
    group([
      query(':self', [
        animate('2s ease-in', style({ height: '*' }))
      ]),
      query(':enter', [
        animate('0.2s ease-in', style({ opacity: 1, scale: 1 }))
      ]),
    ], { params: { startHeight: 0 } })
  ])
])

export const buttonAnimation = trigger('buttonChange', [
  state('initial', style({
    opacity: 1,
    transform: 'scale(1)'
  })),
  state('changed', style({
    opacity: 0,
    transform: 'scale(0.9)'
  })),
  transition('initial <=> changed', [
    animate('0.2s ease-in-out')
  ]),
])

export const paneChangeAnimation = trigger('paneChange', [
  transition('* => *', [
    query(':self', [
      style({ height: '{{startHeight}}px' })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0, transform: 'scale({{startScale}})' })
    ], { optional: true }),
    query(':leave', [
      style({ opacity: 1, transform: 'scale(1)' }),
      animate('{{leaveDuration}} ease-in', style({ opacity: 0, transform: 'scale({{startScale}})' }))
    ], { optional: true }),
    group([
      query(':self', [
        animate('{{selfDuration}} ease-in', style({ height: '*' }))
      ], { optional: true }),
      query(':enter', [
        animate('{{enterDuration}} ease-in', style({ opacity: 1, transform: 'scale(1)' }))
      ], { optional: true })
    ])
  ], { params: { startHeight: 0, startScale: 0.9, leaveDuration: '0.2s', selfDuration: '0.2s', enterDuration: '0.2s' } })
]);

export const translateAnimation = trigger('translateAnimation', [
  state('start', style({
    transform: 'translateX(0)'
  })),
  state('end', style({
    transform: 'translateX({{translateX}}%)'
  }), { params: { translateX: -100 } }),
  transition('start => end', animate('{{duration}}ms ease-in-out'), { params: { duration: 600 } }),
  transition('end => start', animate('{{duration}}ms ease-in-out'), { params: { duration: 600 } })
]);

export const routeAnimations = trigger('routeAnimations', [
  transition('PageOne => PageTwo', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '100%' })
    ], { optional: true }),
    query(':leave', [
      style({ left: '0%' })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '-100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('PageTwo => PageOne', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ], { optional: true }),
    query(':leave', [
      style({ left: '0%' })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ], { optional: true })
    ])
  ])
])