import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula';

export default ({children, className, live, render}) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight theme={dracula} {...defaultProps} code={children.trim()} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}