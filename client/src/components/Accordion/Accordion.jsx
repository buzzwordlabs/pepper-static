import React from 'react';
// import css from './Accordion.module.css';
import CollapsableCard from './CollapsableCard/CollapsableCard';

export default function Accordion(props) {
  console.log(props);
  return (
    <div id={props.id}>
      {props.faq.length > 0
        ? props.faq.map((card, key) => {
            const answer = card.answer.replace(/ \\n /g, '\n\n');
            return (
              <CollapsableCard
                question={card.question}
                answer={answer}
                parentId={props.id}
                id={key}
                key={key}
              />
            );
          })
        : null}
    </div>
  );
}
