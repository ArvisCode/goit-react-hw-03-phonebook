import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from 'redux/contactsAction';

function Filter({ filter, onChangeFilter }) {
  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
