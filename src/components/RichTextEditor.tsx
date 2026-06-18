import React, { useRef, useEffect } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, Heading1, Heading2, AlignLeft, AlignCenter, AlignRight, Link as LinkIcon } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const contentEditableRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (contentEditableRef.current && contentEditableRef.current.innerHTML !== value) {
      if (!value) {
        contentEditableRef.current.innerHTML = '';
      }
    }
  }, [value]);

  const execCommand = (command: string, arg?: string) => {
    document.execCommand(command, false, arg);
    if (contentEditableRef.current) {
      onChange(contentEditableRef.current.innerHTML);
    }
    contentEditableRef.current?.focus();
  };

  const addLink = () => {
    const url = prompt('Enter the link URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const handleInput = () => {
    if (contentEditableRef.current) {
      onChange(contentEditableRef.current.innerHTML);
    }
  };

  const buttons = [
    { icon: <Bold className="w-4 h-4" />, command: 'bold', title: 'Bold' },
    { icon: <Italic className="w-4 h-4" />, command: 'italic', title: 'Italic' },
    { icon: <Underline className="w-4 h-4" />, command: 'underline', title: 'Underline' },
    { icon: <span className="text-xs font-bold font-serif min-w-[16px] text-center">H1</span>, command: 'formatBlock', arg: 'H1', title: 'Heading 1' },
    { icon: <span className="text-xs font-bold font-serif min-w-[16px] text-center">H2</span>, command: 'formatBlock', arg: 'H2', title: 'Heading 2' },
    { icon: <span className="text-xs font-bold font-serif min-w-[16px] text-center">P</span>, command: 'formatBlock', arg: 'P', title: 'Paragraph' },
    { icon: <List className="w-4 h-4" />, command: 'insertUnorderedList', title: 'Bullet List' },
    { icon: <ListOrdered className="w-4 h-4" />, command: 'insertOrderedList', title: 'Numbered List' },
    { icon: <AlignLeft className="w-4 h-4" />, command: 'justifyLeft', title: 'Align Left' },
    { icon: <AlignCenter className="w-4 h-4" />, command: 'justifyCenter', title: 'Align Center' },
    { icon: <AlignRight className="w-4 h-4" />, command: 'justifyRight', title: 'Align Right' },
  ];

  return (
    <div className="border border-slate-200 rounded overflow-hidden flex flex-col bg-slate-50">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-white">
        {buttons.map((btn, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              execCommand(btn.command, btn.arg);
            }}
            title={btn.title}
            className="p-2 text-slate-500 hover:text-royal-base hover:bg-slate-100 rounded transition-colors flex items-center justify-center"
          >
            {btn.icon}
          </button>
        ))}
        <div className="w-px h-6 bg-slate-200 mx-1"></div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addLink();
          }}
          title="Add Link"
          className="p-2 text-slate-500 hover:text-royal-base hover:bg-slate-100 rounded transition-colors flex items-center justify-center"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>
      <div
        ref={contentEditableRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        className="p-4 min-h-[250px] bg-white outline-none prose prose-slate max-w-none 
                   [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 
                   [&>h1]:text-2xl [&>h1]:font-bold [&>h2]:text-xl [&>h2]:font-bold"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}
