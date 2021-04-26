import React from 'react';
import { Emoji } from '../../components';
import { Link } from 'react-router-dom';
import CollapsableCard from '../../components/Accordion/CollapsableCard/CollapsableCard';

export default class FAQ extends React.Component {
  state = { faq: [] };

  UNSAFE_componentWillMount = async () => {
    const response = await fetch('https://api.callpepper.co/faq/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    const { faq } = await response.json();
    this.setState({ faq });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <h1 className="text-center">
              Frequently Asked Questions{' '}
              <Emoji value="🤔" ariaLabel="Thinking Emoji" />
            </h1>
            <h4 className="text-center mb-5">
              Got questions? We've got answers.
            </h4>
            <div id="faqs">
              {this.state.faq.map((card, key) => {
                const answer = card.answer.replace(/ \\n /g, '\n\n');
                return (
                  <CollapsableCard
                    question={card.question}
                    answer={answer}
                    parentId="faqs"
                    id={key}
                    key={key}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
