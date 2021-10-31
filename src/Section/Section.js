import s from '../Section/Section.module.css';
import PropTypes from 'prop-types';

function Section({ className, title, children }) {
  return (
    <div className={className}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}

Section.protoTypes = {
  title: PropTypes.string,
};

export default Section;
