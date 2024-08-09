import { CopyBlock } from 'react-code-blocks';

export function MyCodeComponent({code,language, showLineNumbers}) {
    return (
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLines
      />
    );
  }