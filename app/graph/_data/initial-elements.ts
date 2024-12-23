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
  {
    id: '2',
    position: { x: 300, y: 0 },
    data: { 
        icon: 'MessagesSquare',
        name: 'Social Sentiment Analyzer'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '3',
    position: { x: -300, y: 0 },
    data: { 
        icon: 'MessagesSquare',
        name: 'Social Sentiment Analyzer'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '4',
    position: { x: 0, y: 300 },
    data: { 
        icon: 'MessagesSquare',
        name: 'Social Sentiment Analyzer'
     },
    className: styles.node,
    type: 'agent',
  },
  {
    id: '5',
    position: { x: 0, y: -300 },
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
    id: '1->3',
    source: '1',
    target: '3',
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
];
