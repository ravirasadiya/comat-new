import Logo from '@/components/ui/logo';
import { Handle, Position } from '@xyflow/react';

interface CentralNodeProps {
  data: {
    label: string;
  };
}

const CentralNode = ({ }: CentralNodeProps) => {
  return (
    <div className="p-8 shadow-lg rounded-full border-2 border-brand-600 bg-[#4f3e17] z-[100] shadow-brand-600">
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-violet-500" />
      <div className="flex items-center justify-center">
        <Logo className="w-32 h-32" />
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CentralNode; 