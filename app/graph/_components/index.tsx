'use client'

import { useCallback, MouseEvent } from 'react';

import {
  ReactFlow,
  Panel,
  ProOptions,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  NodeOrigin,
  NodeMouseHandler,
  addEdge,
  OnConnect,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CentralNode from './nodes/CentralNode';
import AgentNode from './nodes/AgentNode';

import useForceLayout from '../_hooks/use-force-layout';

import { initialNodes, initialEdges } from '../_data/initial-elements';

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };

type ExampleProps = {
  strength?: number;
  distance?: number;
};

const nodeOrigin: NodeOrigin = [0.5, 0.5];

const defaultEdgeOptions = { style: { stroke: '#ff66aa', strokeWidth: 3 } };

const emojis = ['👍', '👌', '👏', '👋', '🙌'];

const randomEmoji = (): string => {
  return emojis[Math.floor(Math.random() * (emojis.length - 1))];
};

const nodeTypes = {
  central: CentralNode,
  agent: AgentNode,
};

function ReactFlowPro({ strength = -200, distance = 600 }: ExampleProps = {}) {
  const { screenToFlowPosition } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const dragEvents = useForceLayout({ strength, distance });

  const onPaneClick = useCallback(
    (evt: MouseEvent) => {
      const position = screenToFlowPosition({ x: evt.clientX, y: evt.clientY });
      setNodes((nds) => [
        ...nds,
        {
          id: `${nds.length + 1}`,
          type: 'agent',
          position,
          data: { label: randomEmoji() },
        },
      ]);
    },
    [screenToFlowPosition, setNodes]
  );

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      const childId = window.crypto.randomUUID()
      const childNode = {
        id: childId,
        type: 'agent',
        position: { x: node.position.x + 100, y: node.position.y + 100 },
        data: { label: randomEmoji() },
      };
      const childEdge = {
        id: `${node.id}->${childId}`,
        source: node.id,
        target: childId,
      };

      setNodes((nds) => [...nds, childNode]);
      setEdges((eds) => [...eds, childEdge]);
    },
    [setNodes, setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      proOptions={proOptions}
      onConnect={onConnect}
      onPaneClick={onPaneClick}
      nodeOrigin={nodeOrigin}
      onNodeClick={onNodeClick}
      onNodeDragStart={dragEvents.start}
      onNodeDrag={dragEvents.drag}
      onNodeDragStop={dragEvents.stop}
      defaultEdgeOptions={defaultEdgeOptions}
      fitView
      defaultViewport={{
        x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
        zoom: 0,
      }}
    >
      <Panel position="top-left">
        <b>How to use:</b> Click anywhere on the panel to add nodes, click a
        node to add a connection
      </Panel>
    </ReactFlow>
  );
}

function GraphComponent() {

  return (
    <ReactFlowProvider>
      <ReactFlowPro />
    </ReactFlowProvider>
  );
}

export default GraphComponent;
