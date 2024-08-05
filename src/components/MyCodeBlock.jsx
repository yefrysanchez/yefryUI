import { CodeBlock, dracula } from 'react-code-blocks';


export default function MyCodeBlock({ code }) {
  return (
    <CodeBlock
      text={code}
      language={'javascript'}
      showLineNumbers={true}
      theme={dracula}
    />
  );
}


