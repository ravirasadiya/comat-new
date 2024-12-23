import { Edge, Node } from '@xyflow/react';

import styles from '../styles.module.css';

export const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { },
    className: styles.node,
    type: 'central',
  },
  // social sentiment analyzer
  {
    id: '2',
    position: { x: 300, y: 0 },
    data: { 
        icon: 'BotMessageSquare',
        name: 'Social Screener'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '2.1',
    position: { x: 500, y: 200 },
    data: { 
        icon: 'Twitter',
        name: 'Twitter Troll'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '2.2',
    position: { x: 500, y: -200 },
    data: { 
        icon: 'MessagesSquare',
        name: 'Telegram Bot'
     },
    className: styles.node,
    type: 'agent',
  },
  // financial sentiment analyzer
  {
    id: '3',
    position: { x: -300, y: 0 },
    data: { 
        icon: 'ChartCandlestick',
        name: 'DEXpert'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '3.1',
    position: { x: -500, y: -200 },
    data: { 
        icon: 'Landmark',
        name: 'DEX Aggretator'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '3.2',
    position: { x: -500, y: 200 },
    data: { 
        icon: 'Droplet',
        name: 'Liquidity Manager'
     },
    className: styles.node,
    type: 'agent',
  },
  // news sentiment analyzer
  {
    id: '4',
    position: { x: 0, y: 300 },
    data: { 
        icon: 'Tractor',
        name: 'Yield Aggregator'
     },
    className: styles.node,
    type: 'agent',
  },
  // news sentiment analyzer
  {
    id: '4.1',
    position: { x: 200, y: 500 },
    data: { 
        icon: 'Beef',
        name: 'Staking Agent'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '4.2',
    position: { x: -200, y: 500 },
    data: { 
        icon: 'Coins',
        name: 'Borrow/Lend Agent'
     },
    className: styles.node,
    type: 'agent',
  },
  // news sentiment analyzer
  {
    id: '5',
    position: { x: 0, y: -300 },
    data: { 
        icon: 'Vault',
        name: ''
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '5.1',
    position: { x: -200, y: -500 },
    data: { 
        icon: 'MessagesSquare',
        name: 'Social Sentiment Analyzer'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '5.2',
    position: { x: 200, y: -500 },
    data: { 
        icon: 'MessagesSquare',
        name: 'Social Sentiment Analyzer'
     },
    className: styles.node,
    type: 'agent',
  },
];

export const initialEdges: Edge[] = [
  {
    id: '1->2',
    source: '1',
    target: '2',
  },
  {
    id: '2->2.1',
    source: '2',
    target: '2.1',
  },
  {
    id: '2->2.2',
    source: '2',
    target: '2.2',
  },
  {
    id: '1->3',
    source: '1',
    target: '3',
  },
  {
    id: '3->3.1',
    source: '3',
    target: '3.1',
  },
  {
    id: '3->3.2',
    source: '3',
    target: '3.2',
  },
  {
    id: '1->4',
    source: '1',
    target: '4',
  },
  {
    id: '1->5',
    source: '1',
    target: '5',
  },
  {
    id: '4->4.1',
    source: '4',
    target: '4.1',
  },
  {
    id: '4->4.2',
    source: '4',
    target: '4.2',
  },
  {
    id: '5->5.1',
    source: '5',
    target: '5.1',
  },
  {
    id: '5->5.2',
    source: '5',
    target: '5.2',
  },
  {
    id: '3.2->4',
    source: '3.2',
    target: '4',
  },
];
