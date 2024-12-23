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

const defaultEdgeOptions = { style: { stroke: '#d19900', strokeWidth: 2 } };

const nodeTypes = {
  central: CentralNode,
  agent: AgentNode,
};

function ReactFlowPro({ strength = -200, distance = 300 }: ExampleProps = {}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const dragEvents = useForceLayout({ strength, distance });

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
      nodeOrigin={nodeOrigin}
      onNodeDragStart={dragEvents.start}
      onNodeDrag={dragEvents.drag}
      onNodeDragStop={dragEvents.stop}
      defaultEdgeOptions={defaultEdgeOptions}
      fitView
    />
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
