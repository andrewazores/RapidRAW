import { WindowControls } from 'tauri-controls';

export default function TitleBar() {
  return (
    <div 
      data-tauri-drag-region 
      className="h-10 bg-bg-primary/95 backdrop-blur-sm border-b border-white/5 flex justify-between items-center select-none fixed top-0 left-0 right-0 z-50"
    >
      {/* Left side - Draggable area with App Info */}
      <div data-tauri-drag-region className="flex items-center h-full px-4">
        <p className="text-sm font-semibold text-text-secondary">RapidRAW</p>
      </div>

      {/* Right side - Window Controls */}
      <div className="flex items-center h-full">
        <WindowControls />
      </div>
    </div>
  );
}
