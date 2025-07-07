import { getCurrentWindow } from '@tauri-apps/api/window';
import { WindowControls } from 'tauri-controls';
import { Minus, Square, X } from 'lucide-react';
import { APP, NATIVE } from '@src/window_controls';

export default function TitleBar({ controls }) {
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
        { controls == APP.value ?
            <AppControls /> :
            <WindowControls platform={ controls == NATIVE.value ? undefined : controls } />
        }
      </div>
    </div>
  );
}

function AppControls() {
  const appWindow = getCurrentWindow();

  const handleMinimize = () => {
    appWindow.minimize();
  };

  const handleMaximize = () => {
    appWindow.toggleMaximize();
  };

  const handleClose = () => {
    appWindow.close();
  };

  return (
    <>
      <button
        onClick={handleMinimize}
        className="p-2 h-full inline-flex justify-center items-center hover:bg-white/10 transition-colors duration-150"
        aria-label="Minimize window"
      >
        <Minus size={16} className="text-text-secondary" />
      </button>
      <button
        onClick={handleMaximize}
        className="p-2 h-full inline-flex justify-center items-center hover:bg-white/10 transition-colors duration-150"
        aria-label="Maximize window"
      >
        <Square size={14} className="text-text-secondary" />
      </button>
      <button
        onClick={handleClose}
        className="p-2 h-full inline-flex justify-center items-center hover:bg-red-500/80 transition-colors duration-150 hover:text-white"
        aria-label="Close window"
      >
        <X size={16} className="text-text-secondary" />
      </button>
    </>
  );
}
