import React, { Component } from 'react';
import Statistics from 'components/Statictic/Statictic';
import FeedbackOption from 'components/Feedback/Feedback';
import styles from './Section.module.css';

class Section extends Component {
  static defaultProps = {
    title: '',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = e => {
    const target = e.currentTarget.textContent;
    this.setState(state => {
      for (const key in state) {
        if (key === target) {
          return (state[key] += 1);
        }
      }
    });
  };

  render() {
    return (
      <>
        <h1 className={styles.section__title}>{this.props.title}</h1>
        <FeedbackOption onClickButton={this.handleClickButton} />
        <Statistics state={this.state} />
      </>
    );
  }
}

export default Section;
