import * as React from 'react';
import * as classNames from 'classnames';
import * as queryString from 'query-string';
import TextArea from 'react-textarea-autosize';

interface State {
  subject?: string;
  body?: string;
  expanded: boolean;
}

export default class InteractiveContactForm extends React.PureComponent<{}, State> {

  public state = {
    subject: '',
    body: '',
    expanded: false,
  }

  private handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ subject: e.target.value });
  }

  private handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ body: e.target.value });
  }

  private handleSubmit = () => {
    location.href = `mailto:n33t5hin@gmail.com?${queryString.stringify({
      subject: this.state.subject,
      body:    this.state.body,
    })}`;
  }

  public render () {
    return (
      <div className={classNames('interactive-contact-form', { 'interactive-contact-form--expanded': this.state.expanded })}>
        <input type='text' placeholder='件名' onChange={this.handleChangeSubject} />
        <TextArea placeholder='本文' onChange={this.handleChangeBody} />
        <button onClick={this.handleSubmit}>送信</button>
      </div>
    );
  }
}
